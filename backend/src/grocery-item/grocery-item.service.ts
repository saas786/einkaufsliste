import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GroceryItem,
  GroceryItemDocument,
} from './schemas/grocery-item.schema';

@Injectable()
export class GroceryItemService {
  constructor(
    @InjectModel(GroceryItem.name)
    private groceryItemModel: Model<GroceryItemDocument>,
  ) {}

  async findOne(findOptions: { id?: string; name?: string }) {
    if (findOptions.id) {
      return this.groceryItemModel.findById(findOptions.id);
    } else {
      return this.groceryItemModel.findOne({ name: findOptions.name });
    }
  }

  async findAll() {
    return this.groceryItemModel.find();
  }

  async createOne() {}
}
