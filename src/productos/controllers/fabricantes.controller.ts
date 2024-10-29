import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateFabricanteDTO } from 'src/productos/dtos/fabricantes.dto';
import { FabricantesService } from '../services/fabricantes.service';
import { AppService } from 'src/app.service';

@Controller('fabricantes')
export class FabricantesController {
  // Inyecta tanto FabricantesService como AppService
  constructor(
    private readonly fabricantesService: FabricantesService,
    private readonly appService: AppService,
  ) {}

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.fabricantesService.findOne(id);
  }

  @Get('filter')
  getFabricanteFilter() {
    return {
      message: 'Yo soy un filter - NO Estoy Bloqueado',
    };
  }

  @Get('listar')
  findAll() {
    return this.fabricantesService.findAll();
  }

  @Get(':idFabricante')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('idFabricante', ParseIntPipe) idFabricante: number) {
    return this.fabricantesService.findOne(idFabricante);
  }

  /*@Get('useFactory')
  getUseFactory(): string {
    return this.appService.getUseFactory();
  }*/

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
