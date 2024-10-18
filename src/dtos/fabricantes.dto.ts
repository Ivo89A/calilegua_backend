import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFabricanteDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly origen: string;
}

export class UpdateFabricanteDTO {
  readonly nombre?: string;
  readonly origen?: string;
}
