import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = false;
  showShoppingList: boolean = false;
  @Input() navigatedTo(location: String){
    if(location === "Recipes"){
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if(location === "Shopping List"){
      this.showRecipes = false;
      this.showShoppingList = true;
    }
  }
}
