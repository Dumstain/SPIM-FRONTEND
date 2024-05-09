import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colors: string[] = ['#000000', /* ... otros colores ... */];

  getColors(): string[] {
    return this.colors;
  }
  constructor() { }
}
