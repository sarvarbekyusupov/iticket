import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venue } from './schemas/venue.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenueService {
  constructor(
      @InjectModel(Venue.name) private adminSchema: Model<Venue>
    ) {}
  create(createVenueDto: CreateVenueDto) {
    return this.adminSchema.create(createVenueDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: string) {
    return this.adminSchema.findById(id);
  }

  update(id: string, updateVenueDto: UpdateVenueDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateVenueDto);
  }

  remove(id: string) {
    return this.adminSchema.findByIdAndUpdate(id);
  }
}
