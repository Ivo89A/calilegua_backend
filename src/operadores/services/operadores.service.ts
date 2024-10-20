import { Injectable } from '@nestjs/common';
//import { Operador } from '../entities/operadores.entity'
import { Pedido } from '../entities/pedidos.entity';
//import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';

import { ProductosService } from '../../productos/services/productos.service';

@Injectable()
export class OperadoresService {
  constructor(private productsService: ProductosService) {}

  getOrderByUser(id: number): Pedido {
    const operador = this.findOne(id);
    return {
      date: new Date(),
      operador,
      products: this.productsService.findAll(),
    };
  }
}
