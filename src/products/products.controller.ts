import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { AddCartProductDto } from './productDTO/cart-addproduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() product: AddCartProductDto): Promise<Product> {
    return this.productsService.create(
      product.id,
      product.name,
      product.description,
      product.price,
    );
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Product> {
  //     return this.productsService.findOne(id);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
