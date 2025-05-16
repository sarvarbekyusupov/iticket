import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./schema/customer.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerSchema: Model<Customer>
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerSchema.create(createCustomerDto);
  }

  findAll() {
    return this.customerSchema.find();
  }

  findOne(id: string) {
    return this.customerSchema.findById(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerSchema.findByIdAndUpdate(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.customerSchema.findByIdAndDelete(id);
  }
}
