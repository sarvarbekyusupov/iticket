import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema()
export class VenuePhoto {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venueId: mongoose.Schema.Types.ObjectId;

  @Prop()
  url: string;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
