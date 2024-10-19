import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateCategoryDTO {
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
  readonly stock: number;
}

export class UpdateCategoryDTO {
  readonly nombre?: string;
  readonly description?: string;
  readonly stock?: number;
}
