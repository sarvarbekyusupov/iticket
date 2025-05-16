
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type DistrictDocument = HydratedDocument<District>;

@Schema()
export class District {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: "Region", required: true })
  region_id: Types.ObjectId;
}

export const DistrictSchema = SchemaFactory.createForClass(District);
