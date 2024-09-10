import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';
import {selectAge, selectCost} from '../../store/units/units.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  ages = ["All", 'Dark', 'Feudal', 'Castle', 'Imperial'];
  selectedAge: null
  woodValue: 0
  goldValue: 0
  foodValue: 0

  constructor(private store: Store<any>) {
    this.store.select(
      (state: any) => state.data
    ).subscribe((state: any) => {
      this.selectedAge = state.selectedAge;
      this.woodValue = state.wood;
      this.foodValue = state.food;
      this.goldValue = state.gold;

      console.log(this.foodValue)
    });
  }

  onClickFilterAge(age: any) {
    this.store.dispatch(selectAge({ selectedAge: age }));
  }

  onToggleCheckbox(e: any, type: "food" | "wood" | "gold") {
    this.store.dispatch(selectCost({ [type]: e.target.checked ? 0 : null }));
  }

  onChangeRange(e: any, type: "food" | "wood" | "gold") {
    this.store.dispatch(selectCost({ [type]: parseInt(e.target.value) }));
  }
}
