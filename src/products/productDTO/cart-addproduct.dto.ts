import { IsString, IsNumber } from 'class-validator';

export class AddCartProductDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
