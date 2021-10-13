import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { GroceryItemModule } from './grocery-item/grocery-item.module';
import { GroceryTypeModule } from './grocery-type/grocery-type.module';

@Module({
  imports: [
    GroceryItemModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('DB_URI'),
      }),
    }),
    GroceryTypeModule,
  ],
  providers: [AppService],
})
export class AppModule {}
