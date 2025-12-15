import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected= new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
      new Recipe(
        'Tasty Schintzel', 
        'A very tasty schintzel',
         'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         [
          new Ingredient('meat',2),
          new Ingredient('fries', 100)
         ] ),    
         new Recipe(
          'hamburger', 
          'this is the best burger ever', 
          'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
          new Ingredient('meat', 3),
          new Ingredient('buns', 6)
        ])
        ];

        constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
      console.log('Ingredients to add', ingredients)
      this.slService.addIngredients(ingredients);
    }
}