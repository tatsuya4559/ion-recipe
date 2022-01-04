import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Test',
      imageUrl: 'https://bst-image.imgix.net/prod-gixo/content/uploads/2020/12/test.png?auto=compress%2Cformat&ixlib=php-1.2.1',
      ingredients: ['Apple', 'Banana', 'Potato'],
    },
    {
      id: 'r2',
      title: 'Test2',
      imageUrl: 'https://bst-image.imgix.net/prod-gixo/content/uploads/2020/12/test.png?auto=compress%2Cformat&ixlib=php-1.2.1',
      ingredients: ['Meat'],
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  }
}
