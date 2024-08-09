import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import 'dotenv/config';
import helmet from 'helmet';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';

import { AppModule } from './app.module';
import { APP_CONFIG, Env } from './config/app.config';
import { CORS_CONFIG } from './config/cors.config';
import { useSwagger } from './config/swagger.config';
import { HttpExceptionFilter } from './core/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        nestWinstonModuleUtilities.format.nestLike('Nest', {
          colors: true,
          prettyPrint: true,
        }),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          filename: 'logs/error-%DATE%.log',
          level: 'error',
        }),
      ],
    }),
  });
  const config = app.get<ConfigService<Env>>(ConfigService);

  app.setGlobalPrefix('api');

  app.enableCors(CORS_CONFIG);

  // Middlewares
  app.use(
    helmet({
      crossOriginEmbedderPolicy: config.get('isProductionEnv'),
      contentSecurityPolicy: config.get('isProductionEnv'),
    }),
  );
  app.use(cookieParser());

  // Filters
  app.useGlobalFilters(
    new HttpExceptionFilter(app.get(HttpAdapterHost), config),
  );

  // Pipes
  app.useGlobalPipes(new ValidationPipe());

  useSwagger(app);

  await app.listen(APP_CONFIG.port || 3000);
}
bootstrap();
