import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // async findOne(id: string): Promise<Product> {
  //   return await this.productRepository.findOne(id);
  // }

  async create(
    id: number,
    name: string,
    description: string,
    price: number,
  ): Promise<Product> {
    const newProduct = this.productRepository.create({
      id,
      name,
      description,
      price,
    });
    return await this.productRepository.save(newProduct);
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
