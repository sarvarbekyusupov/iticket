import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema()
export class EventType {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "EventType" })
  parent_event_type_id: mongoose.Schema.Types.ObjectId;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
