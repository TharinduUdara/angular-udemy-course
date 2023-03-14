import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ingredient } from './shared/ingredient.model';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  OnIngredientAdded(Ingredient){
    this.ingrediets.push(Ingredient)
  }
}
