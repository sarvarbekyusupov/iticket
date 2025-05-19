import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue-type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VenueTypes } from './schemas/venue-type.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel(VenueTypes.name) private venuePhotoSchema: Model<VenueTypes>
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venuePhotoSchema.create(createVenueTypeDto)
  }

  findAll() {
    return this.venuePhotoSchema.find();
  }

  findOne(id: string) {
    return this.venuePhotoSchema.findById(id);
  }

  update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenueTypeDto);
  }

  remove(id: number) {
    return this.venuePhotoSchema.findByIdAndDelete(id);
  }
}
