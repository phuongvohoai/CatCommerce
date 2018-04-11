import { ProductTypeService } from './../services/product-type.service';
import { Controller, Get, Req } from '@nestjs/common';
import { ProductType } from '../entities/product-type.entity';

@Controller('product-types')
export class ProductTypesController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Get()
  async getAll(@Req() request) {
    const type = new ProductType();
    type.name = 'Clothes';
    (type.description = 'Clothes category'), this.productTypeService.add(type);

    return this.productTypeService.findAll();
  }
}
