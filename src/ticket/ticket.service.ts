import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Ticket } from "./schemas/ticket.schema";
import { Model } from "mongoose";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private adminSchema: Model<Ticket>) {}
  create(createTicketDto: CreateTicketDto) {
    return this.adminSchema.create(createTicketDto)
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: number) {
    return this.adminSchema.findById(id);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateTicketDto);
  }

  remove(id: number) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}
