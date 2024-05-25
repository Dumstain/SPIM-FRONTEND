import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ventana-pop-up',
  templateUrl: './ventana-pop-up.component.html',
  styleUrls: ['./ventana-pop-up.component.css']
})
export class VentanaPopUpComponent {
  isPopupVisible = false;
  images: string[] = [];

  constructor(private http: HttpClient) {}

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  takePhoto(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();

          video.addEventListener('loadeddata', () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');

            const takeSnapshot = () => {
              context!.drawImage(video, 0, 0, canvas.width, canvas.height);
              if (this.images.length < 4) {
                this.images.push(canvas.toDataURL('image/png'));
              }
              video.srcObject = null;
              stream.getTracks().forEach(track => track.stop());
              this.togglePopup();
            };

            setTimeout(takeSnapshot, 500); // Delay to allow the camera to focus
          }, { once: true });
        })
        .catch(err => {
          console.error('Error accessing the camera', err);
        });
    }
  }

  chooseFromGallery(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = () => {
      const files = Array.from(input.files ?? []).slice(0, 4 - this.images.length);

      files.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (this.images.length < 4) {
            this.images.push(e.target.result);
          }
          this.togglePopup();
        };
        reader.readAsDataURL(file);
      });
    };

    input.click();
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
  }

  saveImages(): void {
    const folio = localStorage.getItem('folio');
    const direccionId = sessionStorage.getItem('direccionId');
    const oficialNombre = 'Nombre del Oficial'; // Cambia esto según tus necesidades

    const formData = new FormData();
    this.images.forEach((image, index) => {
      const blob = this.dataURItoBlob(image);
      formData.append('images', blob, `image${index + 1}.png`);
    });

    formData.append('folio', folio || '');
    formData.append('direccion_id', direccionId || '');
    formData.append('oficial_nombre', oficialNombre);

    this.http.post('http://localhost:3000/api/documentos', formData).subscribe({
      next: res => {
        console.log('Imágenes guardadas correctamente', res);
      },
      error: err => {
        console.error('Error al guardar las imágenes', err);
      }
    });
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
