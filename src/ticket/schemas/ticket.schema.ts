import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Event" })
  event_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  seat_id: number;

  @Prop()
  price: number;

  @Prop()
  service_fee: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "TicketStatus" })
  status_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  ticket_type: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
