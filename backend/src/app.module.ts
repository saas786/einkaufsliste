import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryItemModule } from './grocery-item/grocery-item.module';

@Module({
  imports: [GroceryItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
