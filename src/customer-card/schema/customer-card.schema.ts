import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema()
export class CustomerCard {
  @Prop({ type: Types.ObjectId, ref: "Customer", required: true })
  customer_id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  number: string;

  @Prop()
  year: string;

  @Prop()
  month: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ default: false })
  is_main: boolean;
}

export const CustomerCardSchema = SchemaFactory.createForClass(CustomerCard);
