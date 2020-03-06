import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  emoji: string = 'test--AnimalService';
  constructor() {}
}
