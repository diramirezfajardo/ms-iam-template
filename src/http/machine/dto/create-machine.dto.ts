import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMachineDto {
  @IsNotEmpty()
  @IsString()
  patente?: string;

  @IsNotEmpty()
  @IsString()
  _model?: string;

  @IsNotEmpty()
  @IsString()
  year?: string;
}
