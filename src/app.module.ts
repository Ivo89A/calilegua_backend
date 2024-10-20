import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './operadores/controllers/fabricantes.controller';
import { ProductosController } from './operadores/controllers/productos.controller';
import { CompradoresController } from './operadores/controllers/compradores.controller';
import { CategoriasController } from './operadores/controllers/categorias.controller';
import { OperadoresController } from './operadores/controllers/operadores.controller';
import { PedidosController } from './operadores/controllers/pedidos.controller';
import { ProductosService } from './productos/services/productos.service';
import { PedidosService } from './operadores/services/pedidos.service';
import { OperadoresService } from './operadores/services/operadores.service';
import { FabricantesService } from './productos/services/fabricantes.service';
import { CompradoresService } from './operadores/services/compradores.service';
import { CategoriasService } from './productos/services/categorias.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';

const APIKEY = 'DEV-456';
const APIKEYPROD = 'PROD-12345';

@Module({
  imports: [OperadoresModule, ProductosModule],
  controllers: [
    AppController,
    FabricantesController,
    ProductosController,
    CompradoresController,
    CategoriasController,
    OperadoresController,
    PedidosController,
  ],
  providers: [
    AppService,
    {
      provide: 'APIKEY',
      useValue: process.env.NODE_ENV === 'prod' ? APIKEYPROD : APIKEY,
    },
    ProductosService,
    PedidosService,
    OperadoresService,
    FabricantesService,
    CompradoresService,
    CategoriasService,
  ],
})
export class AppModule {}
