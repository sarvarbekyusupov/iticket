import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDocument } from "./schemas/cart.schema";
import { Model } from "mongoose";

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  create(createCartDto: CreateCartDto) {
    return this.cartModel.create(createCartDto);
  }

  findAll() {
    return this.cartModel.find();
  }

  findOne(id: string) {
    return this.cartModel.findById(id);
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return this.cartModel.findByIdAndUpdate(id, updateCartDto);
  }

  remove(id: string) {
    return this.cartModel.findByIdAndDelete(id);
  }
} 