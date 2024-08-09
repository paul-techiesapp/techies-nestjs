import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'winston-daily-rotate-file';

import { Env, appConfiguration } from './config/app.config';
import { CommentModule } from './modules/comment/comment.module';
import { VideoModule } from './modules/video/video.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      ignoreEnvVars: true,
      load: [appConfiguration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env>) => {
        const dbConfig = configService.get<Env['database']>('database');
        return {
          type: dbConfig.driver as any,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.name,
          synchronize: dbConfig.synchronize,
          logging: dbConfig.logging,
          autoLoadEntities: true,
          charset: 'utf8mb4_unicode_ci',
        };
      },
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env>) => ({
        autoSchemaFile: true,
        sortSchema: true,
        playground: false,
        includeStacktraceInErrorResponses:
          !configService.get('isProductionEnv'),
        subscriptions: {
          'graphql-ws': true,
        },
        context: ({ req, connectionParams }) => {
          return {
            req: {
              ...req,
              headers: {
                ...(req?.headers ?? {}),
                ...Object.entries(connectionParams ?? {}).reduce(
                  (acc, [key, value]) => {
                    acc[key.toLowerCase()] = value;
                    return acc;
                  },
                  {},
                ),
              },
            },
          };
        },
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
    VideoModule,
    CommentModule,
  ],
})
export class AppModule {}
