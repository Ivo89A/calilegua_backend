import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { OperadoresModule } from './operadores/operadores.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppConfigModule } from './config/app.config';
import config from '../config';

const APIKEY = 'DEV-456';
const APIKEYPROD = 'PROD-12345';

@Module({
  imports: [
    forwardRef(() => OperadoresModule), // Usa forwardRef aquí si hay una dependencia circular
    forwardRef(() => ProductosModule), // Usa forwardRef aquí si hay una dependencia circular
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    HttpModule,
    DatabaseModule,
    AppConfigModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APIKEY',
      useValue: process.env.NODE_ENV === 'prod' ? APIKEYPROD : APIKEY,
    },
    {
      provide: 'TAREA_ASINC',
      useFactory: async (httpService: HttpService) => {
        const req = httpService.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const tarea = await lastValueFrom(req);
        return tarea.data;
      },
      inject: [HttpService],
    },
  ],
  exports: [AppService],
})
export class AppModule {}
