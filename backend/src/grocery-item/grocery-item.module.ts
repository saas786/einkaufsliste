import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryItem, GroceryItemSchema } from './schemas/grocery-item.schema';
import { GroceryItemService } from './grocery-item.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroceryItem.name, schema: GroceryItemSchema },
    ]),
  ],
  providers: [GroceryItemService],
})
export class GroceryItemModule {}
