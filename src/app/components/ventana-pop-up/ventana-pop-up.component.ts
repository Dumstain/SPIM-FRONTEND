import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-pop-up',
  templateUrl: './ventana-pop-up.component.html',
  styleUrls: ['./ventana-pop-up.component.css']
})
export class VentanaPopUpComponent {
  isPopupVisible = false;
  images: string[] = [];

  togglePopup():void  {
    this.isPopupVisible = !this.isPopupVisible;
  }

  takePhoto() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();

          setTimeout(() => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            if (context) {
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              if (this.images.length < 4) {
                this.images.push(canvas.toDataURL('image/png'));
              }
            }
            video.srcObject = null;
            stream.getTracks().forEach(track => track.stop());
            this.togglePopup();
          }, 500);
        })
        .catch(err => {
          console.error('Error accessing the camera', err);
        });
    }
  }

  chooseFromGallery() {
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
   // Método para eliminar una imagen
   removeImage(index: number): void {
    this.images.splice(index, 1);
  }
}