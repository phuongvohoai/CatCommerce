import { Module } from '@nestjs/common';
import { ProductTypesController } from './controllers/product-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './entities/product-type.entity';
import { ProductTypeService } from './services/product-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  controllers: [ProductTypesController],
  components: [ProductTypeService],
})
export class ProductsModule {}
