import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-veicular', // Esto debe coincidir con la etiqueta en app.component.html
  templateUrl: './perfil-veicular.component.html',
  styleUrls: ['./perfil-veicular.component.css'],
})
export class PerfilVeicularComponent {
  constructor(private route: Router) {}

  leftHover: boolean = false;
  rightHover: boolean = false;

  onLeftPanelHover(): void {
    this.leftHover = true;
    this.rightHover = false;
  }

  onRightPanelHover(): void {
    this.rightHover = true;
    this.leftHover = false;
  }

  onMouseLeave(): void {
    this.leftHover = false;
    this.rightHover = false;
  }

  irAPagina(titulo: string):void{
    this.route.navigate([titulo]);

  }
}
