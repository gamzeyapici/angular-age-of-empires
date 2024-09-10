import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppService} from "../../services/app.service";
import {Unit} from "../../types";
import {getColorByAge} from "../../utils";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, SidebarComponent],
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent implements OnInit {
  units: Unit[];
  filteredUnits: Unit[] = [];

  constructor(private store: Store<any>, public appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAllUnits().then((items) => {
      this.units = items;

      this.filterUnitsByAge()
      this.filterUnitsByCost()
    });
  }

  filterUnitsByAge() {
    this.store.select(
      (state: any) => state.data
    ).subscribe((state: any) => {
      this.filteredUnits = this.units.filter(unit => state.selectedAge === "All" ? true : unit.age === state.selectedAge)
    });
  }

  filterUnitsByCost() {
    this.store.select(
      (state: any) => state.data
    ).subscribe((state: any) => {
      this.filteredUnits = this.filteredUnits.filter(unit => {
        let result = false

        if((state.food !== null && unit.cost?.Food || 0) >= state.food && (state.wood !== null && unit.cost?.Wood || 0) >= state.wood && (state.gold !== null && unit.cost?.Gold || 0) >= state.gold) {
          result = true
        }

        return result
      })
    });
  }

  protected readonly getColorByAge = getColorByAge;
}
