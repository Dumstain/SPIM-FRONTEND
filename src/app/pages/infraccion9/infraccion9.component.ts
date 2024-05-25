import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infraccion9',
  templateUrl: './infraccion9.component.html',
  styleUrls: ['./infraccion9.component.css'],
})
export class Infraccion9Component implements OnInit {
  isExpanded: boolean = false;
  infractor: any;
  direccion: string | null = null;
  coche: any;
  folio: string | null = null;
  observaciones: string | null = null;
  infracciones: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.infractor = JSON.parse(sessionStorage.getItem('infractor') || '{}');
    this.direccion = sessionStorage.getItem('direccion');
    this.coche = JSON.parse(localStorage.getItem('coche') || '{}');
    this.folio = localStorage.getItem('folio');
    this.observaciones = sessionStorage.getItem('observaciones');
    this.infracciones = sessionStorage.getItem('infracciones');
  }

  toggleContent(): void {
    this.isExpanded = !this.isExpanded;
  }

  downloadPdf() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const logo = new Image();
    logo.src = 'assets/images/logop.png';
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 20, 10, 30, 30);
      this.addTextContent(doc);
    };
    logo.onerror = (e) => {
      console.error('Error loading logo:', e);
      this.addTextContent(doc);
    };
  }

  private addTextContent(doc: jsPDF) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text('POLICIA DE MORELIA', 105, 20, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(150, 0, 0);
    doc.text('BOLETA DE INFRACCIÓN', 105, 30, { align: 'center' });
    doc.text('Folio', 190, 20, { align: 'right' });
    doc.text('NO. ' + this.folio, 200, 30, { align: 'right' });

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text('Morelia, Michoacan', 170, 40);
    doc.text('Fecha:', 150, 50);
    doc.text('Hora:', 180, 50);

    doc.setFont('helvetica', 'bold');
    doc.text('PROBABLE INFRACTOR', 20, 50);
    doc.text('LUGAR DE INFRACCION', 20, 70);
    doc.text('VEHICULO', 20, 90);
    doc.text('Observaciones:', 20, 210);

    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(20, 225, 115, 225);
    doc.line(120, 225, 190, 225);

    doc.text('Nombre, firma y numero de placa del Policia de Morelia', 20, 230);
    doc.text('Firma de notificacion al probable infractor', 120, 230);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Nombre: ' + this.infractor.nombre, 20, 60);
    doc.text('Placas: ' + this.coche.placas, 20, 65);

    doc.text('Ubicacion: ' + this.direccion, 20, 75);

    doc.text('Marca: ' + this.coche.marca, 20, 95);
    doc.text('Linea: ' + this.coche.linea, 60, 95);
    doc.text('Tipo: ' + this.coche.tipo, 90, 95);
    doc.text('Modelo: ' + this.coche.modelo, 120, 95);
    doc.text('Color: ' + this.coche.color, 150, 95);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('REGLAMENTO DE TRÁNSITO Y VIALIDAD DEL MUNICIPIO DE MORELIA MICHOACÁN', 30, 105);
    doc.setFontSize(8);
    doc.text('CONUDCTA Y/0 MOTIVO DE LA INFRACCION', 20, 115);
    doc.text('FUNDAMENTO LEGAL', 85, 115);
    doc.text('ARTICULO', 85, 120);
    doc.text('FRACCIÓN', 103, 120);
    doc.setFontSize(7);
    doc.text('CAUSA INMEDIATAS QUE SE TIENEN EN', 120, 115);
    doc.text('CONSIDERACION PARA LA EMISION DEL ACTO', 120, 120);
    doc.setFontSize(10);
    doc.text('SANCIÓN', 180, 115);
    doc.text('UMA', 185, 120);

    doc.setDrawColor(0);
    doc.setLineWidth(0.5);

    doc.line(83, 110, 83, 200);
    doc.line(102, 117, 102, 200);
    doc.line(119, 110, 119, 200);
    doc.line(178, 110, 178, 200);

    doc.line(20, 110, 200, 110);
    doc.line(83, 117, 119, 117);
    doc.line(20, 122, 200, 122);

    doc.save('Infraccion.pdf');
  }

  guardarDocumento() {
    const documento = {
      detalle_id: null, // Este valor deberá ser llenado apropiadamente
      oficial_nombre: 'Nombre del Oficial', // Cambia esto según tus necesidades
      direccion_id: sessionStorage.getItem('direccionId') || '',
      folio: this.folio,
      imagen: 'URL de la imagen si es necesario', // Cambia esto según tus necesidades
      formato_documento: 'PDF'
    };

    this.http.post('http://localhost:3000/api/documentos', documento).subscribe({
      next: res => {
        console.log('Documento guardado correctamente', res);
        this.router.navigate(['ingreso-de-placas']);
      },
      error: err => {
        console.error('Error al guardar el documento', err);
      }
    });
  }

  irAPagina(titulo: string): void {
    this.router.navigate([titulo]);
  }
  
}
