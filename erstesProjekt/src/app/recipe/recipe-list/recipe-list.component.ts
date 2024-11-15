import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ``
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://th.bing.com/th/id/OIP.tDp0dqPcBFUvddzF3yEZHgAAAA?rs=1&pid=ImgDetMain')
  selectedRecipe!: Recipe;

onSelected(recipe: Recipe){
  this.recipeSelected.emit(recipe);
}
}
