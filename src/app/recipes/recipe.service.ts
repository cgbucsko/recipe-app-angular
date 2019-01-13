import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: "root"
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d",
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      "Recipe test two",
      "Could also be a test...",
      "https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d",
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }
}
