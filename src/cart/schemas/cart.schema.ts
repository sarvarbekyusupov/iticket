import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Customer" })
  customer_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  createdAt: Date;

  @Prop()
  finishedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Status" })
  status_id: mongoose.Schema.Types.ObjectId;
}

export const CartSchema = SchemaFactory.createForClass(Cart); 