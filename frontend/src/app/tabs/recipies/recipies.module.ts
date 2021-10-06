import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipiesPageRoutingModule } from './recipies-routing.module';

import { RecipiesPage } from './recipies.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { AllRecipiesPage } from './all-recipies/all-recipies.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipiesPageRoutingModule],
  declarations: [RecipiesPage, RecipeItemComponent, AllRecipiesPage],
})
export class RecipiesPageModule {}
