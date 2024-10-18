import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Put,
    Query,
    HttpStatus,
    HttpCode,
    ParseIntPipe,
  } from '@nestjs/common';
  import { CreateProductDTO } from 'src/dtos/productos.dto';
  //import { ParseIntPipe } from '@nestjs/common';
  import { PedidosService } from 'src/services/productos.service';

@Controller('pedidos')
export class PedidosController {
    @Controller('pedidos')
export class PedidosController {
  constructor(private productsService: ProductosService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.productsService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':idProduct')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.productsService.findOne(idProduct);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDTO) {
    return {
      message: 'creaste un nuevo producto',
      payload,
    };
  }

  @Put('modificar/:idPedido')
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

  @Delete('idPedido')
  deleteProducto(@Param('idPedido') idPedido: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1,
    };
  }
}
