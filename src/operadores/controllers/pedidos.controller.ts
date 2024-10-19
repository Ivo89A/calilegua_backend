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
import { CreatePedidosDTO } from 'src/operadores/dtos/pedidos.dto';
//import { ParseIntPipe } from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private PedidosService: PedidosService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.PedidosService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.PedidosService.findOne(id);
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.PedidosService.findAll();
  }

  @Get(':idProduct')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.PedidosService.findOne(idProduct);
  }

  @Post()
  createProduct(@Body() payload: CreatePedidosDTO) {
    return {
      message: 'creaste un nuevo producto',
      payload,
    };
  }

  @Put('modificar/:idProduct')
  updateProducto(
    @Param('idProduct') idProduct: string,
    @Body() body: CreatePedidosDTO,
  ): any {
    return {
      idProduct: idProduct,
      nombre: body.nombre,
      origen: body.origen,
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
