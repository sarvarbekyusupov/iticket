import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cart" })
  cart_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  createdAt: Date;

  @Prop()
  finishedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "PaymentMethod" })
  payment_method_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "DeliveryMethod" })
  delivery_method_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  discount_coupon_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Status" })
  status_id: mongoose.Schema.Types.ObjectId;
}

export const BookingSchema = SchemaFactory.createForClass(Booking); 