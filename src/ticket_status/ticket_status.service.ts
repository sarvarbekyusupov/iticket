import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TicketStatus } from './schemas/ticket_status.schema';
import { Model } from 'mongoose';

@Injectable()
export class TicketStatusService {
  constructor(
        @InjectModel(TicketStatus.name) private adminSchema: Model<TicketStatus>
      ) {}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.adminSchema.create(createTicketStatusDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: number) {
    return this.adminSchema.findById(id);
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateTicketStatusDto);
  }

  remove(id: number) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}
