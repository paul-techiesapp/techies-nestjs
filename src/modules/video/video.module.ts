import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

import { VideoDTO, VideoEntity } from './video.entity';
import { CreateVideoInput, UpdateVideoInput } from './video.input';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';
import { VideoSubscriber } from './video.subscriber';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VideoEntity])],
      services: [
        // INJECT SERVICES, DON'T REMOVE!
        VideoSubscriber,
        VideoResolver,
        VideoService,
      ],
      resolvers: [
        {
          ServiceClass: VideoService,
          DTOClass: VideoDTO,
          EntityClass: VideoEntity,
          CreateDTOClass: CreateVideoInput,
          UpdateDTOClass: UpdateVideoInput,
          guards: [],
        },
      ],
    }),
  ],
  controllers: [],
})
export class VideoModule {}
