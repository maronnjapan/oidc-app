import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { yamlDocumentUrl: '/yaml' });

  const yamlDocument = yaml.dump(document, {
    skipInvalid: true,
    noRefs: true,
  });
  fs.writeFileSync("../web/swagger.yaml", yamlDocument);

  await app.listen(5000);
}
bootstrap();