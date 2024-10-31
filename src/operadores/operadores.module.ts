import { Module, forwardRef } from '@nestjs/common';
import { OperadoresController } from './controllers/operadores.controller';
import { OperadoresService } from './services/operadores.service';
import { CompradoresController } from './controllers/compradores.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { CompradoresService } from './services/compradores.service';
import { PedidosService } from './services/pedidos.service';
import { ProductosService } from 'src/productos/services/productos.service';
import { DetallepedidosController } from './controllers/detallepedidos.controller';
import { ProductosModule } from 'src/productos/productos.module'; // Asegúrate de importar el módulo

@Module({
  controllers: [
    CompradoresController,
    OperadoresController,
    PedidosController,
    DetallepedidosController,
  ],
  providers: [
    PedidosService,
    OperadoresService,
    CompradoresService,
    ProductosService,
  ],
  imports: [forwardRef(() => ProductosModule)], // Usa forwardRef aquí si hay una dependencia circular
})
export class OperadoresModule {}
