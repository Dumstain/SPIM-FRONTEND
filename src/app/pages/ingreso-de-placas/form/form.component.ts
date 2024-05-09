import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private route: Router) {
    
  }


  irAPagina(titulo: string):void{
    this.route.navigate([titulo]);
  }

}