import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component {


  descargaPDF(BASES_ENTEPACH29: string): void {
    const nombreArchivo = `${BASES_ENTEPACH29}.pdf`
    const rutaArchivo = `assets/pdf/${nombreArchivo}`;

    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo;
    link.click();
  }

  descargaDOCX(FICHA_DE_POSTULACION: string): void {
    const nombreArchivo = `${FICHA_DE_POSTULACION}.docx`
    const rutaArchivo = `assets/pdf/${nombreArchivo}`;

    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo;
    link.click();
  }

  descargaJPG(CONVOCATORIA_ENTEPACH29: string): void {
    const nombreArchivo = `${CONVOCATORIA_ENTEPACH29}.jpg`
    const rutaArchivo = `assets/pdf/${nombreArchivo}`;

    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo;
    link.click();
  }
}
