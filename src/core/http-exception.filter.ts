import { Env } from '@/config/app.config';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly configService: ConfigService<Env>,
  ) {}

  catch(exception: Error, host: ArgumentsHost) {
    const isDev = !!this.configService.get('isDevelopmentEnv');
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    this.logger.error(
      exception.message,
      exception.stack,
      HttpExceptionFilter.name,
    );

    if (host.getType() === ('graphql' as any)) {
      if (exception instanceof HttpException || isDev) {
        return exception;
      } else {
        return new InternalServerErrorException();
      }
    }
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      message: getExceptionMessage(exception, isDev),
      timestamp: new Date().toISOString(),
    };
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    return exception;
  }
}

const getExceptionMessage = (exception: Error, isDev: boolean): string => {
  if (exception instanceof HttpException || (isDev && exception.message)) {
    return exception.message;
  }
  return new InternalServerErrorException().message;
};
