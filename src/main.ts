import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Movie API Service')
    .setDescription(`
    Movie API Service provides access to movie information from TMDB.
    
    ## Features
    - Get popular movies with pagination
    - Multi-language support
    - High-quality movie metadata
    
    ## Authentication
    This API requires TMDB API key for authentication.
    
    ## Rate Limiting
    Please note that TMDB has its own rate limiting policies.
  `)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
      urls: [{
        url: './swagger-ui-init.js',
        name: 'Default'
      }]
    }
  });

  const allowedOrigins = configService.get<string>('ALLOWED_ORIGINS');
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
