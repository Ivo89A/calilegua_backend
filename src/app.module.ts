import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './controllers/fabricantes.controller';
import { ProductosController } from './controllers/productos.controller';
import { CompradoresController } from './controllers/compradores.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { OperadoresController } from './controllers/operadores.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { ProductosService } from './services/productos.service';
import { PedidosService } from './services/pedidos.service';
import { OperadoresService } from './services/operadores.service';
import { FabricantesService } from './services/fabricantes.service';
import { CompradoresService } from './services/compradores.service';
import { CategoriasService } from './services/categorias.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    FabricantesController,
    ProductosController,
    CompradoresController,
    CategoriasController,
    OperadoresController,
    PedidosController,
  ],
  providers: [AppService, ProductosService, PedidosService, OperadoresService, FabricantesService, CompradoresService, CategoriasService],
})
export class AppModule {}
