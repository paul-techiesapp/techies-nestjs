import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const useSwagger = (app: INestApplication) => {
  // Swagger
  const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_NAME} API`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
