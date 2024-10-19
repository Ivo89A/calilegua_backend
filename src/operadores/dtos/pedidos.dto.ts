import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePedidosDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly origen: string;
}

export class UpdatePedidosDTO {
  readonly nombre?: string;
  readonly description?: string;
  readonly precio?: number;
  readonly stock?: number;
  readonly origen?: string;
  readonly imagen?: string;
}
