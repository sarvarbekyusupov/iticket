import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer-address/customer-address.module';
import { CustomerCardModule } from './customer-card/customer-card.module';
import { VenueModule } from './venue/venue.module';
import { VenueTypesModule } from './venue-types/venue-types.module';
import { TypesModule } from './types/types.module';
import { VenuPhotoModule } from './venu-photo/venu-photo.module';
import { SeatTypeModule } from './seat-type/seat-type.module';
import { SeatModule } from './seat/seat.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    RegionModule,
    DistrictModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    VenueModule,
    VenueTypesModule,
    TypesModule,
    VenuPhotoModule,
    SeatTypeModule,
    SeatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
