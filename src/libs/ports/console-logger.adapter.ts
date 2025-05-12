// src/logger/console-logger.adapter.ts
import { Injectable } from '@nestjs/common';
import { LoggerPort } from '../ports/logger.port';

@Injectable()
export class ConsoleLoggerAdapter implements LoggerPort {
  log(message: string, ...meta: unknown[]) {
    console.log(message, ...meta);
  }
  error(message: string, trace?: unknown, ...meta: unknown[]) {
    console.error(message, trace, ...meta);
  }
  warn(message: string, ...meta: unknown[]) {
    console.warn(message, ...meta);
  }
  debug(message: string, ...meta: unknown[]) {
    console.debug(message, ...meta);
  }
}
