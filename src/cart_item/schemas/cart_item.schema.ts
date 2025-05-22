import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema()
export class CartItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" })
  ticket_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cart" })
  cart_id: mongoose.Schema.Types.ObjectId;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem); 