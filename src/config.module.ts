import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que la configuración esté disponible en toda la aplicación
    }),
  ],
})
export class AppModule {}
