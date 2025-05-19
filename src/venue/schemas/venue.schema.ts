import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueDocument = HydratedDocument<Venue>;

@Schema()
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop({ type: Object }) 
  schema: any;

  @Prop()
  regionId: number;

  @Prop()
  districtId: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
