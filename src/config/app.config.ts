import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: 'CONFIGURATION',
      useFactory: (configService: ConfigService) => configService.get('app'), // Asegúrate de que 'app' sea la clave correcta
      inject: [ConfigService],
    },
  ],
  exports: ['CONFIGURATION'], // Asegúrate de exportarlo
})
export class AppConfigModule {}
