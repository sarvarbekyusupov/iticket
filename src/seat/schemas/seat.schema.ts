import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type SeatDocument = HydratedDocument<Seat>;

@Schema()
export class Seat {
  @Prop()
  sector: number;

  @Prop()
  row_number: number;

  @Prop()
  number: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venue_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "SeatType" })
  seat_type_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: Object }) 
  location_in_schema: any;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);
