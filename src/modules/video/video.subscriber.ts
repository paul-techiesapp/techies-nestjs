import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
} from 'typeorm';

import { VideoEntity } from './video.entity';

@EventSubscriber()
export class VideoSubscriber implements EntitySubscriberInterface<VideoEntity> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return VideoEntity;
  }
}
