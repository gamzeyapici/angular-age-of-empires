import { Injectable } from '@angular/core';
import { Unit } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dataLocation = '/assets/data.json';
  public allUnits: Unit[] = [];

  public async getAllUnits(): Promise<Unit[]> {
    const data = await fetch(this.dataLocation);
    return (await data.json()).units ?? [];
  }

  async getUnitById(id: number): Promise<Unit | undefined> {
    if(!this.allUnits.length) {
      this.allUnits = await this.getAllUnits();
    }
    return this.allUnits.find(u => u.id === id);
  }
}
