import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUrl,
  IsPositive,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  readonly description: string;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  readonly precio: number;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsString()
  @IsNotEmpty()
  readonly origen: string;

  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;
}

export class UpdateProductDTO {
  readonly nombre?: string;
  readonly description?: string;
  readonly precio?: number;
  readonly stock?: number;
  readonly origen?: string;
  readonly imagen?: string;
}
