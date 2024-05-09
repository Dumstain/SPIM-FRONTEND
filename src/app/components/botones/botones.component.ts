import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  constructor(private route: Router) {
    
  }


  irAPagina(titulo: string):void{
    this.route.navigate([titulo]);

  }
}
