import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

import { ApiProperty, PartialType } from 'nestjs/swagger';

export class CreateCategoriasDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  readonly description: string;
}

export class UpdateCategoriasDTO extends PartialType(CreateCategoriasDTO) {}
