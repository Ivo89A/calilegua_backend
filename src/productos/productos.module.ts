import { Module } from '@nestjs/common';
import { CategoriasController } from './controllers/categorias.controller';
import { FabricantesController } from './controllers/fabricantes.controller';
import { ProductosController } from './controllers/productos.controller';
import { CompradoresService } from 'src/operadores/services/compradores.service';
import { CategoriasService } from './services/categorias.service';
import { FabricantesService } from './services/fabricantes.service';
import { ProductosService } from './services/productos.service';
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
    AppModule,
  ],
  exports: [ProductosService], // Exportamos ProductosService para usarlo en otros módulos
})
export class ProductosModule {}
