import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue-types.service';
import { VenueTypesController } from './venue-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenueTypes, VenueTypesSchema } from './schemas/venue-type.schema';

@Module({
  imports:[MongooseModule.forFeature([{
        name: VenueTypes.name,
        schema:VenueTypesSchema
      }]),],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
