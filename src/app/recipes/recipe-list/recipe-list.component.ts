import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
recipes: Recipe[]=[
  new Recipe('test recipe', 'this is simply a test', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
  new Recipe('second TEST recipe', 'this is simply a test', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
];

constructor(){

}

onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe)
}
}
