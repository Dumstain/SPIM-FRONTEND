import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-infracciones',
  templateUrl: './modal-infracciones.component.html',
  styleUrls: ['./modal-infracciones.component.css']
})
export class ModalInfraccionesComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  handleFormSubmission(event: any) {
    this.closeModal();
  }
}
