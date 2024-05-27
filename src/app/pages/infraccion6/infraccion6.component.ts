import { Component, OnInit } from '@angular/core';
import { GeocodingService } from 'src/app/services/geocoding.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infraccion6',
  templateUrl: './infraccion6.component.html',
  styleUrls: ['./infraccion6.component.css']
})
export class Infraccion6Component implements OnInit {
  public address: string | null = null;
  private apiKey = 'AIzaSyBSSmZmL-_X25xY6L4I5o5cwu2fB8bwFAw'; // Sustituye con tu clave API real
  public locationObtained: boolean = false;

  constructor(private geocodingService: GeocodingService, private http: HttpClient) {}

  ngOnInit(): void {
    const storedAddress = sessionStorage.getItem('address');
    if (storedAddress) {
      this.address = JSON.parse(storedAddress).detalles;
      this.locationObtained = true;
    }
  }

  onGetLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.displayLocation(position.coords.latitude, position.coords.longitude);
        this.locationObtained = true; // Desactivar el botón después de obtener la ubicación
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
        const parsedAddress = this.parseAddress(response.results[0]);
        this.saveAddress(parsedAddress);
        this.storeAddressInSessionStorage(parsedAddress);
      } else {
        console.error('Geocoding failed:', response.status);
      }
    }, error => {
      console.error('Geocoding error:', error);
    });
  }

  parseAddress(geocodeResult: any): any {
    const addressComponents = geocodeResult.address_components;
    const address = {
      calle: '',
      numero: '',
      ciudad: '',
      estado: '',
      pais: '',
      detalles: geocodeResult.formatted_address
    };

    addressComponents.forEach((component: any) => {
      const types = component.types;
      if (types.includes('route')) {
        address.calle = component.long_name;
      }
      if (types.includes('street_number')) {
        address.numero = component.long_name;
      }
      if (types.includes('locality')) {
        address.ciudad = component.long_name;
      }
      if (types.includes('administrative_area_level_1')) {
        address.estado = component.long_name;
      }
      if (types.includes('country')) {
        address.pais = component.long_name;
      }
    });

    return address;
  }

  saveAddress(address: any): void {
    const folio = sessionStorage.getItem('folio'); // Obtener el folio del sessionStorage
    if (folio) {
      this.http.post('http://localhost:3000/api/direcciones', address).subscribe({
        next: (res: any) => {
          console.log('Dirección guardada correctamente:', res);
          const direccionId = res.direccion_id; // Asume que la respuesta incluye el direccion_id
          this.storeAddressIdInSessionStorage(direccionId);
        },
        error: (err) => {
          console.error('Error al guardar la dirección:', err);
        }
      });
    } else {
      console.error('Folio no encontrado en sessionStorage');
    }
  }

  storeAddressIdInSessionStorage(direccionId: number): void {
    sessionStorage.setItem('direccion_id', direccionId.toString());
    console.log('ID de dirección guardada en sessionStorage:', direccionId);
  }

  storeAddressInSessionStorage(address: any): void {
    sessionStorage.setItem('address', JSON.stringify(address));
    console.log('Dirección guardada en sessionStorage:', address);
  }

  handleError(error: any): void {
    console.error('Geolocation error:', error);
  }
}
