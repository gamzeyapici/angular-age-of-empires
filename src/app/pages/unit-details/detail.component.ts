import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from "@angular/common";
import {AppService} from "../../services/app.service";
import {Unit} from "../../types";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  unit?: Unit;
  unitId: number | null = null;

  constructor(private route: ActivatedRoute,public appService: AppService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.unitId = parseInt(params.get('id') as string);

      this.appService.getUnitById(this.unitId).then((item) => {
       this.unit = item;
      });
    });
  }
}
