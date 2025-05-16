import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/mongoose';
import { District } from './schemas/district.schema';
import mongoose, { Model } from 'mongoose';
import { Region } from '../region/schemas/region.schema';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private districtSchema: Model<District>,
    @InjectModel(Region.name) private regionSchema: Model<Region>
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const {region_id} = createDistrictDto
    if (!mongoose.isValidObjectId(region_id)) {
      throw new BadRequestException("incorrect region id")
    }
    const region = await this.regionSchema.findById(region_id)

    if (!region) {
      throw  new BadRequestException("enter region id")
    }

    const district = await this.districtSchema.create(createDistrictDto)
    region.districts.push(district)
    await region.save()
    return district
  }

  // findAll() {
  //   return this.districtSchema.find();
  // }

  async findAll() {
    return this.districtSchema.find().populate("region_id").exec();
  }

  findOne(id: string) {
    return this.districtSchema.findById(id);
  }

  update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return this.districtSchema.findByIdAndUpdate(id, updateDistrictDto);
  }

  remove(id: string) {
    return this.districtSchema.findByIdAndDelete(id);
  }
}
