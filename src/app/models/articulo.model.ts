// src/app/models/fraccion.model.ts
export interface Fraccion {
  nombre: string;
  incisos: string[];
}
  
    
  export interface Articulo {
    fracciones: Fraccion[];
    motivo: string;
  }

 
  

