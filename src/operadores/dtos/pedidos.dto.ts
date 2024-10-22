import { IsNotEmpty, IsNumber, IsArray, IsString } from 'class-validator';
import { Operador } from '../entities/operadores.entity';

export class CreatePedidosDTO {
  @IsString()
  @IsNotEmpty()
  readonly date: string;
  @IsNumber()
  @IsNotEmpty()
  readonly operador: Operador;
  @IsArray()
  @IsNotEmpty()
  readonly products: number[];
}

export class UpdatePedidosDTO {
  readonly date: string;
  readonly operador: Operador;
  readonly products: number[];
}
