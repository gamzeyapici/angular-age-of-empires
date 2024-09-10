import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';
import {UnitsComponent} from "../units/units.component";

@Component({
  selector: 'app-root',
  templateUrl: 'home.component.html',
  imports: [RouterOutlet, UnitsComponent, RouterLink,CommonModule],
  standalone: true,
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {



}
