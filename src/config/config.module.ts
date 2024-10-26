import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import appConfig from '../../config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // Hace que la configuración esté disponible en toda la aplicación
      load: [appConfig],
    }),
  ],
})
export class ConfigModule {}
