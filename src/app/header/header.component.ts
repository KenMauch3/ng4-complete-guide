import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    collapsed = true;

    @Output() navigatedTo = new EventEmitter<String>();

    onClickRecipes() {
        this.navigatedTo.emit("Recipes");
    }

    onClickShoppingList() {
        this.navigatedTo.emit("Shopping List");
    }
}