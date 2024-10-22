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
import { CreateProductDTO } from 'src/productos/dtos/productos.dto';
//import { ParseIntPipe } from '@nestjs/common';
import { ProductosService } from '../services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private ProductosService: ProductosService) {}

  /*@Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.ProductosService.findAll();
  }*/

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.ProductosService.findOne(id);
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.ProductosService.findAll();
  }

  @Get(':idProduct')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.ProductosService.findOne(idProduct);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDTO) {
    return {
      message: 'creaste un nuevo producto',
      payload,
    };
  }

  @Put('modificar/:idProduct')
  updateProducto(
    @Param('idProduct') idProduct: string,
    @Body() body: CreateProductDTO,
  ): any {
    return {
      idProduct: idProduct,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete('idProduct')
  deleteProducto(@Param('idProduct') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1,
    };
  }
}
