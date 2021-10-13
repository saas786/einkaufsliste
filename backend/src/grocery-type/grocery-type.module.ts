import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryType, GroceryTypeSchema } from './schemas/grocery-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroceryType.name, schema: GroceryTypeSchema },
    ]),
  ],
})
export class GroceryTypeModule {}
