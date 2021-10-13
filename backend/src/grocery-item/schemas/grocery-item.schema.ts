import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UNITS } from '../../common/units';

export type GroceryItemDocument = GroceryItem & Document;

@Schema()
export class GroceryItem {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  fullAmount: number;

  @Prop()
  currentAmount: number;

  @Prop()
  boughtWhere: string;

  @Prop()
  price: number;
}

export const GroceryItemSchema = SchemaFactory.createForClass(GroceryItem);
