// src/logger/logger.module.ts
import { Module } from '@nestjs/common';
import { ConsoleLoggerAdapter } from './console-logger.adapter';
import { LOGGER_PORT } from '../ports/logger.port';

@Module({
  providers: [
    ConsoleLoggerAdapter,
    { provide: LOGGER_PORT, useExisting: ConsoleLoggerAdapter },
  ],
  exports: [LOGGER_PORT],
})
export class LoggerModule {}
