import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker-modal',
  templateUrl: './color-picker-modal.component.html',
  styleUrls: ['./color-picker-modal.component.scss']
})
export class ColorPickerModalComponent {
  colors: string[] = [
    '#FFFFFF', // Blanco
    '#000000', // Negro
    '#808080', // Gris
    '#C0C0C0', // Plata
    '#FF0000', // Rojo
    '#0000FF', // Azul
    '#008000', // Verde
    '#FFFF00', // Amarillo
    '#A52A2A', // Marrón
    '#FFA500', // Naranja
    '#000080', // Azul Marino
    '#F5F5DC', // Beige
    '#EE82EE', // Violeta
    '#FFC0CB', // Rosa
    '#FFD700', // Dorado
    '#B87333', // Cobre
    '#808000', // Oliva
    '#40E0D0', // Turquesa
    '#800020', // Burgundy
    '#006400'  // Verde Oscuro
  ];
  selectedColorIndex: number | null = null;

  @Output() colorSelected = new EventEmitter<string>();

  selectColor(index: number) {
    this.selectedColorIndex = index;
  }

  confirmSelection() {
    if (this.selectedColorIndex !== null) {
      this.colorSelected.emit(this.colors[this.selectedColorIndex]);
      this.closeModal();
    }
  }
  closeModal() {
    // Aquí deberías tener lógica para comunicar al componente padre que cierre el modal,
    // por ejemplo, emitir otro evento o llamar a un servicio que comparta el estado del modal.
  }
}

