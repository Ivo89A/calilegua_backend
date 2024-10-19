import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateOperadorDTO {
  @IsString()
  @IsPositive()
  readonly email: string;

  @IsNumber()
  @IsString()
  @IsNotEmpty()
  readonly password: number;

  @IsNumber()
  @IsNumber()
  @IsPositive()
  readonly role: number;
}

export class UpdateOperadorDTO extends PartialType(
  OmitType(CreateOperadorDTO, ['email']),
) {}
