import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './operadores/controllers/fabricantes.controller';
import { ProductosController } from './operadores/controllers/productos.controller';
import { CompradoresController } from './operadores/controllers/compradores.controller';
import { CategoriasController } from './operadores/controllers/categorias.controller';
import { OperadoresController } from './operadores/controllers/operadores.controller';
import { PedidosController } from './operadores/controllers/pedidos.controller';
import { ProductosService } from './operadores/services/productos.service';
import { PedidosService } from './operadores/services/pedidos.service';
import { OperadoresService } from './operadores/services/operadores.service';
import { FabricantesService } from './operadores/services/fabricantes.service';
import { CompradoresService } from './operadores/services/compradores.service';
import { CategoriasService } from './operadores/services/categorias.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';

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
    ProductosService,
    PedidosService,
    OperadoresService,
    FabricantesService,
    CompradoresService,
    CategoriasService,
  ],
})
export class AppModule {}
