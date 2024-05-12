import { Component, OnInit } from '@angular/core';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-infraccion6',
  templateUrl: './infraccion6.component.html',
  styleUrls: ['./infraccion6.component.css']
})
export class Infraccion6Component {
  public address: string | null = null;
  private apiKey = 'AIzaSyBSSmZmL-_X25xY6L4I5o5cwu2fB8bwFAw'; // Sustituye con tu clave API real

  constructor(private geocodingService: GeocodingService) {}

  /*onGetLocation(): void {
    // Coordenadas estáticas para propósitos de prueba
    const latitude = 19.7229386;
    const longitude = -101.1858201;
  
    this.displayLocation(latitude, longitude);
  }
  
  private displayLocation(latitude: number, longitude: number): void {
    this.geocodingService.getGeocode(latitude, longitude, this.apiKey).subscribe(
      (response: any) => {
        if (response.status === 'OK') {
          this.address = response.results[0].formatted_address; // Asegúrate de que esta línea corresponde con la estructura de la respuesta
        } else {
          console.error('Geocoding failed: ' + response.status);
        }
      },
      (error) => {
        console.error('Geocoding error: ', error);
      }
    );
  }*/
  
  onGetLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.displayLocation(position.coords.latitude, position.coords.longitude);
      }, this.handleError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  displayLocation(latitude: number, longitude: number): void {
    this.geocodingService.getGeocode(latitude, longitude, this.apiKey).subscribe(response => {
      if (response.status === 'OK') {
        this.address = response.results[0].formatted_address;
      } else {
        console.error('Geocoding failed:', response.status);
      }
    }, error => {
      console.error('Geocoding error:', error);
    });
  }

  handleError(error: any): void {
    console.error('Geolocation error:', error);
  }
}
