import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { PRODUCT_CATEGORIES } from '../../common/product-categories';
import { UNITS } from '../../common/units';
import { GroceryItem } from '../../grocery-item/schemas/grocery-item.schema';

export type GroceryTypeDocument = GroceryType & Document;

export class GroceryType {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  unit: UNITS;

  @Prop({ default: 0, required: true })
  actual: number;

  @Prop({ default: 0, required: true })
  target: number;

  @Prop()
  category: PRODUCT_CATEGORIES;

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'groceries' }] })
  groceries: GroceryItem[];
}

export const GroceryTypeSchema = SchemaFactory.createForClass(GroceryType);
