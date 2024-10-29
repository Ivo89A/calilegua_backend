import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

const APIKEY = 'DEV-456';
const APIKEYPROD = 'PROD-12345';

@Module({
  imports: [
    OperadoresModule,
    ProductosModule,
    ConfigModule,
    HttpModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
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
        // Cambia HttpModule por HttpService
        const req = httpService.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const tarea = await lastValueFrom(req);
        return tarea.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
