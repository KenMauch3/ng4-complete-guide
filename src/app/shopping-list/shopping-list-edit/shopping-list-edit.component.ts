import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReferece: ElementRef;
  @ViewChild('amountInput') amountInputReferece: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    this.ingredientAdded.emit( new Ingredient(this.nameInputReferece.nativeElement.value, this.amountInputReferece.nativeElement.value));
  }
}
