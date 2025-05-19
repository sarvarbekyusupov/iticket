import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueTypesDocument = HydratedDocument<VenueTypes>;

@Schema()
export class VenueTypes {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venueId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Type" })
  typeId: mongoose.Schema.Types.ObjectId;
}

export const VenueTypesSchema = SchemaFactory.createForClass(VenueTypes);
