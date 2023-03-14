import { Component ,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a Test Recipe',
      'This is  Simply a test',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg'
    ),

    new Recipe(
      'a Test Recipe 2',
      'This is  Simply a test 2',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg'
    ),
  ];
  
  ngRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
    
  
}
