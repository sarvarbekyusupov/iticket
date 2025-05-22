import { Injectable } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Booking, BookingDocument } from "./schemas/booking.schema";
import { Model } from "mongoose";

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}

  create(createBookingDto: CreateBookingDto) {
    return this.bookingModel.create(createBookingDto);
  }

  findAll() {
    return this.bookingModel.find();
  }

  findOne(id: string) {
    return this.bookingModel.findById(id);
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingModel.findByIdAndUpdate(id, updateBookingDto);
  }

  remove(id: string) {
    return this.bookingModel.findByIdAndDelete(id);
  }
} 