import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn:'platform'})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A Super-tasty Schnitzel - just awesome!', 
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'What else do you need to say?', 
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1)
      ]),
    new Recipe(
      'Apple Pie', 
      'Hey Rocky, I like pie!', 
      'https://capturepot.com/files/preview/1280x853/11613916998wiunavisxzvkicsmctfgecxaymyw1xyyxg2ymx7hudxq1kycowz3ui89wg2lyasrxb5xeofm9lcdjpktrvqsb9pnaykvh0shnhat.jpeg',
      [
        new Ingredient('Apples', 3),
        new Ingredient('Sugar', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Flour', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}