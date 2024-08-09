import { DataSource, EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { CommentEntity } from './comment.entity';

@EventSubscriber()
export class CommentSubscriber implements EntitySubscriberInterface<CommentEntity> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return CommentEntity;
  }
}
