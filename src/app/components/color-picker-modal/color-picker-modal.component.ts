import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker-modal',
  templateUrl: './color-picker-modal.component.html',
  styleUrls: ['./color-picker-modal.component.scss']
})
export class ColorPickerModalComponent {
  colors: string[] = [
    '#767778',
    '#1024bd',
    ' #07ced9 ',
    ' #352f2c ',
    ' #acb5b3 ',
    ' #06d70a ',
    ' #a3b4b4',
    ' #b20bcb ',
    ' #cc0f28 ',
    '#cbdae4 ',
    ' #b3b404',
    '#b61635 ',
    ' #6a108f ',
    ' #2d4275 ',
    ' #088081 ',
    ' #c48d15 ',
    ' #ac5f34',
    ' #593312 ',
    ' #8b9108 ',
    ' #585451 ',
    // ... añade más colores según necesites
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

