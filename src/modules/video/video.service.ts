import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VideoEntity } from './video.entity';

@Injectable()
@QueryService(VideoEntity)
export class VideoService extends TypeOrmQueryService<VideoEntity> {
  constructor(
    @InjectRepository(VideoEntity) videoRepo: Repository<VideoEntity>,
  ) {
    super(videoRepo, { useSoftDelete: false });
  }
}
