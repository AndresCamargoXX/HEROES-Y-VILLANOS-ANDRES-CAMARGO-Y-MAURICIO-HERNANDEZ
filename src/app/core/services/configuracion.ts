import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor() { }

  cargarConfiguracionInicial() {
    const temaGuardado = localStorage.getItem('temaOscuro');
    const temaOscuro = temaGuardado ? JSON.parse(temaGuardado) : false;
    
    const fuenteGuardada = localStorage.getItem('tamanoFuente');
    const tamanoFuente = fuenteGuardada || 'normal';

    if (temaOscuro) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    document.body.classList.remove('fuente-normal', 'fuente-grande');
    document.body.classList.add(`fuente-${tamanoFuente}`);
  }

  obtenerTemaOscuro(): boolean {
    const temaGuardado = localStorage.getItem('temaOscuro');
    return temaGuardado ? JSON.parse(temaGuardado) : false;
  }

  obtenerTamanoFuente(): string {
    return localStorage.getItem('tamanoFuente') || 'normal';
  }

  obtenerIdioma(): string {
    return localStorage.getItem('idioma') || 'es';
  }

  guardarTemaOscuro(activado: boolean) {
    localStorage.setItem('temaOscuro', JSON.stringify(activado));
    this.cargarConfiguracionInicial();
  }

  guardarTamanoFuente(tamano: string) {
    localStorage.setItem('tamanoFuente', tamano);
    this.cargarConfiguracionInicial();
  }
}