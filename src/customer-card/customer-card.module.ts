import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer-card.service';
import { CustomerCardController } from './customer-card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerCard, CustomerCardSchema } from './schema/customer-card.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CustomerCard.name,
        schema: CustomerCardSchema,
      },
    ]),
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}