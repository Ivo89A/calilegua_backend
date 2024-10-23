import { Injectable } from '@nestjs/common';
//import { Operador } from '../entities/operadores.entity'
import { Pedido } from '../entities/pedidos.entity';
//import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';

import { ProductosService } from '../../productos/services/productos.service';

@Injectable()
export class OperadoresService {
  findOne: any;
  constructor(private productsService: ProductosService) {}

  getOrderByUser(id: number): Pedido {
    const operador = this.findOne(id);
    const products = this.productsService.findAll();

    return {
      id: Math.floor(Math.random() * 1000),
      date: new Date(),
      operador,
      products,
    };
  }
}
