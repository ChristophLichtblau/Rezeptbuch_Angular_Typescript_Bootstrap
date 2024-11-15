import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: ``
})
export class RecipeComponent {
selectedRecipe!: Recipe;


}
