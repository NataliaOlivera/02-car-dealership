import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //agarra solo lo que yo necesito
      forbidNonWhitelisted: true, //controla que no venga menos data de la que yo necesito
    })
  );
  
  await app.listen(3000);
}
main();
