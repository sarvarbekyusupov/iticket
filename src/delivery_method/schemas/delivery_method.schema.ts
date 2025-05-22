import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type DeliveryMethodDocument = HydratedDocument<DeliveryMethod>;

@Schema()
export class DeliveryMethod {
  @Prop()
  name: string;
}

export const DeliveryMethodSchema = SchemaFactory.createForClass(DeliveryMethod); 