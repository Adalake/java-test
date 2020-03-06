import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  color: string = 'test-CarService';
  constructor() {}
}
