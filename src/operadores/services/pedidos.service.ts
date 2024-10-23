import { Injectable, NotFoundException } from '@nestjs/common';
import { Pedido } from '../entities/pedidos.entity';
import { CreatePedidosDTO } from '../dtos/pedidos.dto';
import { Operador } from '../entities/operadores.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class PedidosService {
  private idCont = 1;
  private pedidos: Pedido[] = [
    {
      id: 1,
      date: new Date('22-08-13'),
      operador: new Operador(),
      products: [new Producto()],
    },
    {
      id: 2,
      date: new Date('22-08-13'),
      operador: new Operador(),
      products: [new Producto()],
    },
    {
      id: 3,
      date: new Date('22-08-13'),
      operador: new Operador(),
      products: [new Producto()],
    },
  ];

  findAll() {
    return this.pedidos;
  }
  findOne(id: number) {
    const foundInPedidos = this.pedidos.find((item) => item.id === id);

    // Combinar los resultados
    const category = foundInPedidos;
    if (!category) {
      throw new NotFoundException(`El pedido con id: #${id} no existe`);
    }

    return category; // Retornar el pedido encontrado
  }

  create(payload: CreatePedidosDTO) {
    this.idCont = this.idCont + 1;
    const newPedidos = {
      id: this.idCont,
      ...payload,
      products: Array.isArray(payload.products)
        ? payload.products
        : [payload.products],
    };
    this.pedidos.push(newPedidos);
    return newPedidos;
  }

  /*update(id: number, payload: UpdatePedidosDTO) {
    const product = this.findOne(id);
    }*/
}
