import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
