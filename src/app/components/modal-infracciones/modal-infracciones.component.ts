import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-infracciones',
  templateUrl: './modal-infracciones.component.html',
  styleUrls: ['./modal-infracciones.component.css']
})
export class ModalInfraccionesComponent {
  @Output() close = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<any>();

  closeModal() {
    this.close.emit();
  }

  handleFormSubmission(event: any) {
    this.formSubmit.emit(event);
  }
}
