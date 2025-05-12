import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LOGGER_PORT, LoggerPort } from '../ports/logger.port';

export class ExceptionInterceptor implements NestInterceptor {
  constructor(@Inject(LOGGER_PORT) private readonly logger: LoggerPort) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse<Response>();

    return next.handle().pipe(
      catchError((err) => {
        const status =
          err instanceof HttpException
            ? err.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        let message = err.message || 'Internal server error';
        let subErrors: any[] = [];

        if (
          status === HttpStatus.BAD_REQUEST &&
          Array.isArray(err?.response?.message)
        ) {
          message = 'Validation error';
          subErrors = err.response.message;
        }

        const errorResponse = {
          message,
          status,
          data: {
            error: err?.response?.error || err?.error || 'Error',
            errorCode: err?.response?.errorCode || err?.errorCode || null,
            subErrors,
          },
        };

        // Log error
        if (status >= 500) {
          this.logger.error(`[ExceptionInterceptor] ${message}`, err.stack);
        } else {
          this.logger.debug(`[ExceptionInterceptor] ${message}`);
        }

        res.status(status).json(errorResponse);
        return throwError(() => err);
      }),
    );
  }
}
