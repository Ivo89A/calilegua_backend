import { Injectable, NotFoundException } from '@nestjs/common';
import { Pedidos } from './../entities/pedidos.entity';
import { CreatePedidosDTO } from './../dtos/pedidos.dto';

@Injectable()
export class PedidosService {
  private idCont = 1;
  private pedidos: Pedidos[] = [
    {
      id: 1,
      nombre: 'Persona A',
      origen: 'Taiwan',
    },
    {
      id: 2,
      nombre: 'Persona B',
      origen: 'Colombia',
    },
    {
      id: 3,
      nombre: 'Persona C',
      origen: 'Chile',
    },
  ];

  findAll() {
    return this.pedidos;
  }

  findOne(id: number) {
    const pedido = this.pedidos.find((item) => item.id === id);
    if (!pedido) {
      throw new NotFoundException(`El pedido con id: #${id} no existe`);
    }
    return pedido;
  }

  create(payload: CreatePedidosDTO) {
    this.idCont = this.idCont + 1;
    const newPedidos = {
      id: this.idCont,
      ...payload,
    };
    this.pedidos.push(newPedidos);
    return newPedidos;
  }

  /*update(id: number, payload: UpdatePedidosDTO) {
      const product = this.findOne(id);
    }*/

  remove(id: number) {
    const index = this.pedidos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`El pedido #${id} no se encuentra`);
    }
    this.pedidos.splice(index, 1);
    return true;
  }
}
