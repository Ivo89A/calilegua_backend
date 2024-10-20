import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { OperadoresService } from '../services/operadores.service';
//import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';

@Controller('controller')
export class OperadoresController {
  constructor(private OperadoresService: OperadoresService) {}

  @Get(':id/pedidos')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.OperadoresService.getOrderByUser(id);
  }
}
