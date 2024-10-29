import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { OperadoresService } from '../services/operadores.service';
//import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';

@Controller('operadores')
export class OperadoresController {
  constructor(private readonly OperadoresService: OperadoresService) {}

  @Get(':userId/pedidos')
  getOrders(@Param('id', ParseIntPipe) userId: number) {
    return this.OperadoresService.getOrderByUser(userId);
  }
}
