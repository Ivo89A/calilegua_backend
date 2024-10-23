import { IsNotEmpty, IsNumber, IsArray, IsString } from 'class-validator';
import { Operador } from '../entities/operadores.entity';
import { Producto } from 'src/productos/entities/producto.entity';

export class CreatePedidosDTO {
  @IsString()
  @IsNotEmpty()
  readonly date: Date;
  @IsNumber()
  @IsNotEmpty()
  readonly operador: Operador;
  @IsArray()
  @IsNotEmpty()
  readonly products: Producto;
}

export class UpdatePedidosDTO {
  readonly date: Date;
  readonly operador: Operador;
  readonly products: Producto;
}
