import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./schema/customer.schema";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerSchema: Model<Customer>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { password, confirm_password, email } = createCustomerDto;
    
        const admin = await this.customerSchema.findOne({ email });
    
        if (admin) {
          throw new BadRequestException("Bunday email mavjud");
        }
    
        if (password !== confirm_password) {
          throw new BadRequestException("parollar mos emas");
        }
    
        const hashed_password = await bcrypt.hash(password, 7);
    
        return this.customerSchema.create({
          ...createCustomerDto,
          hashed_password,
          messsage: "Foydalanuvchi qo'shildi",
        });
    
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
