// src/app/services/geolocation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private googleMapsApiKey = 'AIzaSyDKsgPtKQusCWWxRZrldxZGoBniLQxQVZ4';

  constructor(private http: HttpClient) {}

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  getHumanReadableAddress(latitude: number, longitude: number): Observable<string> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.googleMapsApiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => response.results[0].formatted_address)
    );
  }
}
