import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lang } from './schemas/lang.schema';
import { Model } from 'mongoose';

@Injectable()
export class LangService {
  constructor(
        @InjectModel(Lang.name) private adminSchema: Model<Lang>
      ) {}
  create(createLangDto: CreateLangDto) {
    return this.adminSchema.create(createLangDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: number) {
    return this.adminSchema.findById(id);
  }

  update(id: number, updateLangDto: UpdateLangDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateLangDto);
  }

  remove(id: number) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}
