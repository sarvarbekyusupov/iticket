import { Injectable } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CartItem, CartItemDocument } from "./schemas/cart_item.schema";
import { Model } from "mongoose";

@Injectable()
export class CartItemService {
  constructor(@InjectModel(CartItem.name) private cartItemModel: Model<CartItemDocument>) {}

  create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemModel.create(createCartItemDto);
  }

  findAll() {
    return this.cartItemModel.find();
  }

  findOne(id: string) {
    return this.cartItemModel.findById(id);
  }

  update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemModel.findByIdAndUpdate(id, updateCartItemDto);
  }

  remove(id: string) {
    return this.cartItemModel.findByIdAndDelete(id);
  }
} 