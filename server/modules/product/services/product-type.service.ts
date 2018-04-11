import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductType } from '../entities/product-type.entity';

@Component()
export class ProductTypeService {
  constructor(
    @InjectRepository(ProductType)
    private readonly productTypeRepository: Repository<ProductType>,
  ) {}

  async findAll(): Promise<ProductType[]> {
    return await this.productTypeRepository.find();
  }

  async add(type: ProductType): Promise<void> {
    return await this.productTypeRepository.insert(type);
  }
}
