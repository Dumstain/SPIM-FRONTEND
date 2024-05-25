import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfraccionesService } from '../../services/infracciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {
  @Output() infraccionRegistrada = new EventEmitter<any>();

  manualEntryForm: FormGroup;
  availableArticles: any[] = [];
  availableFractions: any[] = [];
  availableIncises: any[] = [];
  motivo: string = '';
  folio: number;

  constructor(
    private fb: FormBuilder,
    private infraccionesService: InfraccionesService,
    private router: Router
  ) {
    this.folio = this.generateRandomFolio(); // Generar el folio al iniciar el componente
    this.manualEntryForm = this.fb.group({
      folio: [{ value: this.folio, disabled: true }, Validators.required],
      article: ['', Validators.required],
      fraction: ['', Validators.required],
      incise: ['', Validators.required],
      reason: ['', Validators.required],
      observaciones: [''],
      sector: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.infraccionesService.getArticulos().subscribe(data => {
      this.availableArticles = data;
    });

    // Guardar el folio en el sessionStorage
    sessionStorage.setItem('folio', this.folio.toString());
  }

  generateRandomFolio(): number {
    return Math.floor(Math.random() * 1000000); // Genera un número aleatorio entre 0 y 999999
  }

  onArticleChange(): void {
    const selectedArticleId = this.manualEntryForm.get('article')?.value;
    this.infraccionesService.getFracciones(selectedArticleId).subscribe(data => {
      this.availableFractions = data;
      this.manualEntryForm.get('fraction')?.reset();
      this.manualEntryForm.get('incise')?.reset();
      this.manualEntryForm.get('reason')?.reset();
      this.availableIncises = [];
      this.motivo = '';
    });
  }

  onFractionChange(): void {
    const selectedArticleId = this.manualEntryForm.get('article')?.value;
    const selectedFractionId = this.manualEntryForm.get('fraction')?.value;
    this.infraccionesService.getIncisos(selectedArticleId, selectedFractionId).subscribe(data => {
      this.availableIncises = data;
      this.manualEntryForm.get('incise')?.reset();
      this.manualEntryForm.get('reason')?.reset();
      this.motivo = '';
    });
  }

  onInciseChange(): void {
    const selectedInciseId = this.manualEntryForm.get('incise')?.value;
    this.infraccionesService.getMotivo(selectedInciseId).subscribe(data => {
      this.motivo = data.motivo;
      this.manualEntryForm.get('reason')?.setValue(this.motivo);
    });
  }

  onSubmit() {
    if (this.manualEntryForm.valid) {
      const infractorId = sessionStorage.getItem('infractorId');
      if (!infractorId) {
        console.error('Infractor ID no encontrado en sessionStorage');
        return;
      }

      const userId = sessionStorage.getItem('userId');
      if (!userId) {
        console.error('User ID no encontrado en sessionStorage');
        return;
      }

      const folio = sessionStorage.getItem('folio');
      if (!folio) {
        console.error('Folio no encontrado en sessionStorage');
        return;
      }

      const formData = {
        ...this.manualEntryForm.getRawValue(),
        folio: parseInt(folio, 10), // Asegurar que el folio se incluya en los datos enviados
        infractorData: {
          infractor_id: parseInt(infractorId, 10)
        },
        usuario_id: parseInt(userId, 10) // Añadir el userId a los datos enviados
      };

      console.log('Enviando datos:', formData);

      this.infraccionesService.registrarInfraccion(formData).subscribe({
        next: res => {
          console.log('Infracción registrada correctamente', res);
          this.infraccionRegistrada.emit(formData);
        },
        error: err => {
          console.error('Error al registrar la infracción', err);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
}
