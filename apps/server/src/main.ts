import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HttpExceptionFilter } from './app/shared/filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('SeekServer');

  const app = await NestFactory.create(AppModule);

  app.use(compression());
  app.use(helmet());

  const { title, description, contact, version } = environment.swagger;

  const swaggerOptions = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(contact.name, contact.url, contact.email)
    .addServer(`http://${environment.app.host}:{port}/api/`, 'Development', {
      port: {
        enum: [environment.app.port],
        default: environment.app.port,
      },
    })
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
    .build();

  const globalPrefix = 'api';
  const swaggerPrefix = 'docs';

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(swaggerPrefix, app, swaggerDoc, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  logger.log('Swagger UP');

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    logger.log('API Docs at http://localhost:' + port + '/' + swaggerPrefix);
  });
}

bootstrap();
