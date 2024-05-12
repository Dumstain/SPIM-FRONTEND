import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-infraccion9',
  templateUrl: './infraccion9.component.html',
  styleUrls: ['./infraccion9.component.css'],
})
export class Infraccion9Component {
  isExpanded: boolean = false;

  constructor(private router: Router) {}

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
    logo.src = 'assets/images/logop.png'; // Asegúrate de que el archivo es accesible y en formato PNG
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 20, 10, 30, 30);
      this.addTextContent(doc);
    };
    logo.onerror = (e) => {
      console.error('Error loading logo:', e);
      // Continúa generando el PDF sin el logo en caso de error
      this.addTextContent(doc);
    };
  }

  private addTextContent(doc: jsPDF) {
  
    doc.setFont('helvetica', 'bold'); // Cambia el estilo a negrita
    doc.setFontSize(20);  // Tamaño de fuente estándar
    doc.setTextColor(100);  // Color gris oscuro para texto regular
    doc.text('POLICIA DE MORELIA ', 105, 20, { align: 'center' });

    // Texto con tamaño mayor
    doc.setFontSize(14);  // Aumenta el tamaño de la fuente
    doc.setTextColor(150, 0, 0);  // Color rojo
    doc.text('BOLETA DE INFRACCIÓN', 105, 30, { align: 'center' });
    doc.text('Folio ', 190, 20, { align: 'right' });
    doc.text('NO. 092812', 200, 30, { align: 'right' });

 
    doc.setFontSize(10);
    doc.setTextColor(0);  // Vuelve al color negro  

    // Continúa añadiendo más contenido con el tamaño de fuente estándar
    doc.text('Morelia, Michoacan', 170, 40);
    doc.text('Fecha:', 150, 50);
    doc.text('Hora:', 180, 50);
 


    // Volver al tamaño de fuente estándar para el resto del texto
    doc.setFontSize(10);
    doc.setTextColor(0);  // Vuelve al color negro  
    doc.setFont('helvetica', 'bold'); // Cambia el estilo a negrita
    // Continúa añadiendo más contenido con el tamaño de fuente estándar
    doc.text('PROBABLE INFRACTOR', 20, 50);
    doc.text('LUGAR DE INFRACCION', 20, 70);
    doc.text('VEHICULO', 20, 90);
    doc.text('Observaciones:', 20, 210);

    doc.setDrawColor(0);  // Color negro para la línea
    doc.setLineWidth(0.5);  // Grosor de la línea
    doc.line(20, 225, 115, 225);// Desde (x1, y1) hasta (x2, y2)     // FIRMA 1
    doc.line(120, 225, 190, 225);// Desde (x1, y1) hasta (x2, y2)     // FIRMA 1

    doc.text('Nombre , firma y numero de placa del Policia de Morelia ', 20, 230);
    doc.text('Firma de notificacion al probable infractor ', 120, 230);



    // Datos del infractor
    doc.setFontSize(12);  // Tamaño intermedio
    doc.setFont('helvetica', 'normal');
    doc.text('Nombre:', 20, 60); 
    doc.text('Telefono:', 20, 65); 

  // Datos de la ubicacion 
    doc.setFontSize(12);  // Tamaño intermedio
    doc.setFont('helvetica', 'normal');
    doc.text('Ubicacion:', 20, 75); 


    // Datos de Vehiculo
    doc.setFontSize(12);  // Tamaño intermedio
    doc.setFont('helvetica', 'normal');
    doc.text('Marca:', 20, 95); 
    doc.text('Linea:', 60, 95); 
    doc.text('Tipo:', 90, 95); 
    doc.text('Modelo:', 120, 95); 
    doc.text('Color:', 150, 95); 


    doc.setFontSize(10);
    doc.setTextColor(0);  // Vuelve al color negro  
    doc.setFont('helvetica', 'bold'); // Cambia el estilo a negrita
    // Continúa añadiendo más contenido con el tamaño de fuente estándar
    doc.text('REGLAMENTO DE TRÁNSITO Y VIALIDAD DEL MUNICIPIO DE MORELIA MICHOACÁN', 30, 105  );
    doc.setFontSize(8);
    doc.text('CONUDCTA Y/0 MOTIVO DE LA INFRACCION ', 20, 115  );
    doc.text('FUNDAMENTO LEGAL', 85, 115  );
    doc.text('ARTICULO', 85, 120  );
    doc.text('FRACCIÓN', 103, 120  );
    doc.setFontSize(7);
    doc.text('CAUSA INMEDIATAS QUE SE TIENEN EN', 120, 115  );
    doc.text('CONSIDERACION PARA LA EMISION DEL ACTO', 120, 120  );
    doc.setFontSize(10);
    doc.text('SANCIÓN', 180, 115  );
    doc.text('UMA', 185, 120  );



    doc.setDrawColor(0);  // Color negro para la línea
    doc.setLineWidth(0.5);  // Grosor de la línea

    // Línea vertical a la izquierda

    doc.line(83, 110, 83, 200);  // Desde (x1, y1) hasta (x2, y2)     LINEA VERTICAL-1
    doc.line(102, 117, 102, 200);  // Desde (x1, y1) hasta (x2, y2)   LINEA VETTICAL -2
    doc.line(119, 110, 119, 200);  // Desde (x1, y1) hasta (x2, y2)   LINEA VERTICAL -3

    doc.line(178, 110, 178, 200);  // Desde (x1, y1) hasta (x2, y2)   LINEA VERTICAL -4

    // lineas a horizontales
    doc.line(20, 110, 200, 110);// Desde (x1, y1) hasta (x2, y2)     LINEA horizontal 1
    doc.line(83, 117, 119, 117);// Desde (x1, y1) hasta (x2, y2)     LINEA horizontal 2
    doc.line(20, 122, 200, 122);// Desde (x1, y1) hasta (x2, y2)     LINEA horizontal 3


    doc.save('Infraccion.pdf');
  }

  irAPagina(titulo: string): void {
    this.router.navigate([titulo]);
  }
}
