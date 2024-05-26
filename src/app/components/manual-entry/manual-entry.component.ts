import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfraccionesService } from '../../services/infracciones.service';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {
  @Output() infraccionRegistrada = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  manualEntryForm: FormGroup;
  availableArticles: any[] = [];
  availableFractions: any[] = [];
  availableIncises: any[] = [];
  motivo: string = '';
  folio: number;

  constructor(
    private fb: FormBuilder,
    private infraccionesService: InfraccionesService
  ) {
    const storedFolio = sessionStorage.getItem('folio');
    if (storedFolio) {
      this.folio = parseInt(storedFolio, 10);
    } else {
      this.folio = this.generateRandomFolio();
      sessionStorage.setItem('folio', this.folio.toString());
    }

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
  }

  generateRandomFolio(): number {
    return Math.floor(Math.random() * 1000000);
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

      const coche = JSON.parse(sessionStorage.getItem('coche') || '{}');
      if (!coche.coche_id) {
        console.error('Coche ID no encontrado en sessionStorage');
        return;
      }

      const formData = {
        ...this.manualEntryForm.getRawValue(),
        folio: parseInt(sessionStorage.getItem('folio') || '0', 10),
        infractorData: {
          infractor_id: parseInt(infractorId, 10),
          coche_id: coche.coche_id
        },
        usuario_id: parseInt(userId, 10)
      };

      console.log('Enviando datos:', formData);

      this.infraccionesService.registrarInfraccion(formData).subscribe({
        next: res => {
          console.log('Infracción registrada correctamente', res);
          if (res.agrupacion_id) {
            sessionStorage.setItem('agrupacion_id', res.agrupacion_id.toString());
            console.log('Agrupacion ID guardado en sessionStorage:', res.conjunto_id);
          }
          this.infraccionRegistrada.emit();
          this.close.emit(); // Emitir el evento close
        },
        error: err => {
          console.error('Error al registrar la infracción', err);
        }
      });
    } else {
      console.error('Formulario no es válido');
    }
  }

  cerrarModal() {
    this.close.emit(); // Emitir el evento close para cerrar el modal
  }
}
