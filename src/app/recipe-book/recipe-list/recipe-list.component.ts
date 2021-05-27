import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://capturepot.com/files/preview/1280x853/11613916998wiunavisxzvkicsmctfgecxaymyw1xyyxg2ymx7hudxq1kycowz3ui89wg2lyasrxb5xeofm9lcdjpktrvqsb9pnaykvh0shnhat.jpeg'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://capturepot.com/files/preview/1280x853/11613916998wiunavisxzvkicsmctfgecxaymyw1xyyxg2ymx7hudxq1kycowz3ui89wg2lyasrxb5xeofm9lcdjpktrvqsb9pnaykvh0shnhat.jpeg'),
    new Recipe('A Third Test Recipe', 'This is a third test', 'https://capturepot.com/files/preview/1280x853/11613916998wiunavisxzvkicsmctfgecxaymyw1xyyxg2ymx7hudxq1kycowz3ui89wg2lyasrxb5xeofm9lcdjpktrvqsb9pnaykvh0shnhat.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipeSelected(selectedRecipe: Recipe){
    this.selectedRecipe.emit(selectedRecipe);
  }
}
