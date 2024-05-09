import { Component } from '@angular/core';

@Component({
  selector: 'app-infraccion8',
  templateUrl: './infraccion8.component.html',
  styleUrls: ['./infraccion8.component.css']
})
export class Infraccion8Component {
  isPopupVisible = false;

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  takePhoto() {
    // Lógica para tomar la foto
  }

  chooseFromGallery() {
    // Lógica para elegir una foto de la galería
  }
}