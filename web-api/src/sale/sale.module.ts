import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale,SaleSchema } from './entities/sale.entity';


@Module({
  imports : [MongooseModule.forFeature([{name: Sale.name, schema: SaleSchema}])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
