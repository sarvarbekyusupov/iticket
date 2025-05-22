import { Injectable } from "@nestjs/common";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { InjectModel } from "@nestjs/mongoose";
import { DeliveryMethod, DeliveryMethodDocument } from "./schemas/delivery_method.schema";
import { Model } from "mongoose";

@Injectable()
export class DeliveryMethodService {
  constructor(@InjectModel(DeliveryMethod.name) private deliveryMethodModel: Model<DeliveryMethodDocument>) {}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodModel.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodModel.find();
  }

  findOne(id: string) {
    return this.deliveryMethodModel.findById(id);
  }

  update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodModel.findByIdAndUpdate(id, updateDeliveryMethodDto);
  }

  remove(id: string) {
    return this.deliveryMethodModel.findByIdAndDelete(id);
  }
} 