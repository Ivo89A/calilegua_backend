import { Module, forwardRef } from '@nestjs/common';
import { CategoriasController } from './controllers/categorias.controller';
import { FabricantesController } from './controllers/fabricantes.controller';
import { ProductosController } from './controllers/productos.controller';
import { CompradoresService } from 'src/operadores/services/compradores.service';
import { CategoriasService } from './services/categorias.service';
import { FabricantesService } from './services/fabricantes.service';
import { ProductosService } from './services/productos.service';
import { OperadoresModule } from 'src/operadores/operadores.module'; // Asegúrate de importar el módulo
import { AppModule } from 'src/app.module';

@Module({
  controllers: [
    FabricantesController,
    ProductosController,
    CategoriasController,
  ],
  providers: [
    ProductosService,
    FabricantesService,
    CompradoresService,
    CategoriasService,
  ],
  exports: [ProductosService],
  imports: [
    forwardRef(() => OperadoresModule), // Usa forwardRef aquí si hay una dependencia circular
    forwardRef(() => AppModule),
  ],
})
export class ProductosModule {}
