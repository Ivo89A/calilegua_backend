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

import { OperadoresService } from '../services/operadores.service';
import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';
import { get } from 'http';

@Controller('operadores')
export class OperadoresController {
    export class OperadoresController {
        @get ('id:/pedidos')
        @GetOrders (@Param('id', ParseIntPipe) id: number){
            return this.OperadoresService.GetOrderByUser(id);
        }
    }
}
