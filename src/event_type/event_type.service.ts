import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EventType } from './schemas/event_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name) private adminSchema: Model<EventType>
  ) {}
  create(createEventTypeDto: CreateEventTypeDto) {
    return this.adminSchema.create(createEventTypeDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: number) {
    return this.adminSchema.findById(id);
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateEventTypeDto);
  }

  remove(id: number) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}
