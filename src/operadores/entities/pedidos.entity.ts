import { Operador } from './operadores.entity';
import { Producto } from 'src/productos/entities/producto.entity';

export class Pedido {
  id: number;
  date: string;
  operador: Operador;
  products: Producto[];
}
