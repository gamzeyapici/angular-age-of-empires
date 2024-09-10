import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './pages/units/units.component';
import {HomeComponent} from "./pages/home/home.component";
import {DetailComponent} from "./pages/unit-details/detail.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'units', component: UnitsComponent } ,
  { path: 'units/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
