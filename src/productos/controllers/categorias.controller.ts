import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  //Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCategoriasDTO } from 'src/productos/dtos/categorias.dto';
//import { ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from '../services/categorias.service';

@Controller('categoria')
export class CategoriasController {
  constructor(private CategoriasService: CategoriasService) {}

  /*@Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.CategoriasService.findAll();
  }*/

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriasService.findOne(id);
  }

  @Get('filter')
  getCategoriaFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.CategoriasService.findAll();
  }

  @Get(':idCategoria')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idCategoria', ParseIntPipe) idProduct: number) {
    return this.CategoriasService.findOne(idProduct);
  }

  @Post()
  createProduct(@Body() payload: CreateCategoriasDTO) {
    return {
      message: 'creaste una nueva categoria',
      payload,
    };
  }

  @Put('modificar/:idCategoria')
  updateProducto(
    @Param('idCategoria') idCategoria: string,
    @Body() body: CreateCategoriasDTO,
  ): any {
    return {
      idCategoria: idCategoria,
      nombre: body.nombre,
      descripcion: body.description,
    };
  }

  @Delete('idProduct')
  deleteProducto(@Param('idCategoria') idCategoria: string): any {
    return {
      idCategoria: idCategoria,
      delete: true,
      count: 1,
    };
  }
}
