---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.subscriber.ts
---
import { DataSource, EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { <%= Name %>Entity } from './<%= h.changeCase.kebabCase(name) %>.entity';

@EventSubscriber()
export class <%= Name %>Subscriber implements EntitySubscriberInterface<<%= Name %>Entity> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return <%= Name %>Entity;
  }
}
