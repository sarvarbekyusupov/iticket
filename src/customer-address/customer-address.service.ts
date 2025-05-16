import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer-address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer-address.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerAddress } from "./schema/customer-address.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress.name)
    private customerSchema: Model<CustomerAddress>
  ) {}

  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerSchema.create(createCustomerAddressDto)
  }

  findAll() {
    return this.customerSchema.find();
  }

  findOne(id: string) {
    return this.customerSchema.findById(id);
  }

  update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerSchema.findByIdAndUpdate(id, updateCustomerAddressDto);
  }

  remove(id: string) {
    return this.customerSchema.findByIdAndDelete(id);
  }
}
