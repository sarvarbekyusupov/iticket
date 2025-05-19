import { Injectable } from '@nestjs/common';
import { CreateVenuPhotoDto } from './dto/create-venu-photo.dto';
import { UpdateVenuPhotoDto } from './dto/update-venu-photo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VenuePhoto } from './schemas/venu-photo.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenuPhotoService {
  constructor(
    @InjectModel(VenuePhoto.name) private venuePhotoSchema: Model<VenuePhoto>
  ) {}
  create(createVenuPhotoDto: CreateVenuPhotoDto) {
    return this.venuePhotoSchema.create(createVenuPhotoDto)
  }

  findAll() {
    return this.venuePhotoSchema.find();
  }

  findOne(id: string) {
    return this.venuePhotoSchema.findById(id);
  }

  update(id: string, updateVenuPhotoDto: UpdateVenuPhotoDto) {
    return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenuPhotoDto);
  }

  remove(id: string) {
    return this.venuePhotoSchema.findByIdAndDelete(id);
  }
}
