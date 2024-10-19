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
import { CreateFabricanteDTO } from 'src/dtos/fabricantes.dto';
//import { ParseIntPipe } from '@nestjs/common';
import { FabricantesService } from './../services/fabricantes.service';

@Controller('fabricantes')
export class FabricantesController {
  constructor(private FabricantesService: FabricantesService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.FabricantesService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.FabricantesService.findOne(id);
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.FabricantesService.findAll();
  }

  @Get(':idProduct')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.FabricantesService.findOne(idProduct);
  }

  @Post()
  createProduct(@Body() payload: CreateFabricanteDTO) {
    return {
      message: 'creaste un nuevo producto',
      payload,
    };
  }

  @Put('modificar/:idProduct')
  updateProducto(
    @Param('idProduct') idProduct: string,
    @Body() body: CreateFabricanteDTO,
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
