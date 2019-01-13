import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
// import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.currentRecipe = this.recipeService.getRecipeById(this.id);
    });
  }

  toList() {
    // The following approach works but possibly could emit too many events:
    // this.currentRecipe.ingredients.forEach((ingredient: Ingredient) => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });

    this.shoppingListService.addIngredients(this.currentRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
