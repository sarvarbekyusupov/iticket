import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HumanCategory } from './schemas/human_category.schema';
import { Model } from 'mongoose';

@Injectable()
export class HumanCategoryService {
  constructor(
        @InjectModel(HumanCategory.name) private adminSchema: Model<HumanCategory>
      ) {}
  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.adminSchema.create(createHumanCategoryDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: number) {
    return this.adminSchema.findById(id);
  }

  update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateHumanCategoryDto);
  }

  remove(id: number) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}
