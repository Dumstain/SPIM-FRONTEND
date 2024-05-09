import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-infraccion6',
  templateUrl: './infraccion6.component.html',
  styleUrls: ['./infraccion6.component.css']
})
export class Infraccion6Component {
  address: string = '';  // Inicialmente sin dirección

  constructor(private geoService: GeolocationService) {}

  onGetLocation() {
    // Limpiar dirección anterior
    this.address = 'Fetching location...';

    // Solicitar permiso y obtener la ubicación
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = position.coords;
          this.geoService.getHumanReadableAddress(coords.latitude, coords.longitude).subscribe(
            address => this.address = address,
            error => {
              console.error('Error retrieving address:', error);
              this.address = 'No address found';
            }
          );
        },
        (error) => {
          console.error('Error obtaining location:', error);
          switch(error.code) {
            case error.PERMISSION_DENIED:
              this.address = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              this.address = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              this.address = "The request to get user location timed out.";
              break;
            default:
              this.address = "An unknown error occurred.";
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Opciones para alta precisión
      );
    } else {
      this.address = "Geolocation is not supported by this browser.";
    }
  }
}
