import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer-address.service';
import { CustomerAddressController } from './customer-address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerAddress, CustomerAddressSchema } from './schema/customer-address.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
        {
          name: CustomerAddress.name,
          schema: CustomerAddressSchema,
        },
      ]),
    ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
