import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  searchForm: FormGroup;
  searchType: string = 'PLACAS';
  private apiUrl = 'http://localhost:3000/api'; // URL base del backend
  documentData: any = null;
  noDataMessage: string | null = null;
  searchPerformed: boolean = false;
  searchSuccess: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.searchForm = this.fb.group({
      searchType: ['PLACAS', Validators.required],
      identifier: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{1,3}-?[A-Z0-9]{1,4}-?[A-Z0-9]{0,3}$')]]
    });
  }

  onSearchTypeChange(searchType: string): void {
    this.searchType = searchType;
    const identifierControl = this.searchForm.get('identifier');
    identifierControl?.setValue('');
    if (searchType === 'PLACAS') {
      identifierControl?.setValidators([Validators.required, Validators.pattern('^[A-Z0-9]{1,3}-?[A-Z0-9]{1,4}-?[A-Z0-9]{0,3}$')]);
    } else {
      identifierControl?.setValidators([Validators.required, Validators.pattern('^[A-HJ-NPR-Z0-9]{17}$')]);
    }
    identifierControl?.updateValueAndValidity();
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      const { searchType, identifier } = this.searchForm.value;
      sessionStorage.setItem('searchType', searchType);
      sessionStorage.setItem('identifier', identifier);
      const placas = identifier;

      const searchEndpoint = searchType === 'PLACAS' ? `buscar-por-placas` : `buscar-por-vin`;
      this.http.post(`${this.apiUrl}/coches/${searchEndpoint}`, { "placas": placas }).subscribe({
        next: (response) => {
          this.documentData = response;
          this.noDataMessage = null;
          this.searchPerformed = true;
          this.searchSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/historial']);
          }, 2000); // Redirige después de 2 segundos
        },
        error: (err) => {
          console.error('Error during search:', err);
          this.documentData = null;
          this.noDataMessage = 'No se encontraron infracciones registradas para este vehículo.';
          this.searchPerformed = true;
          this.searchSuccess = false;
          setTimeout(() => {
            this.router.navigate(['/historial']);
          }, 2000); // Redirige después de 2 segundos
        }
      });
    } else {
      alert('Ingrese un identificador válido.');
    }
  }

  onRegisterInfraccion(): void {
    this.router.navigate(['/registro-infraccion']);
  }

  onTerminate(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
