import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonToggle,
  IonSelect,
  IonSelectOption, IonListHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonToggle,
    CommonModule, 
    FormsModule,
  ]
})
export class ConfigPage implements OnInit {
  temaOscuro: boolean = false;
  tamanoFuente: string = 'normal';
  idioma: string = 'es';

  constructor() {}

  ngOnInit() {
    this.cargarConfiguracion();
  }

  cargarConfiguracion() {
    const temaGuardado = localStorage.getItem('temaOscuro');
    const fuenteGuardada = localStorage.getItem('tamanoFuente');
    const idiomaGuardado = localStorage.getItem('idioma');

    this.temaOscuro = temaGuardado ? JSON.parse(temaGuardado) : false;
    this.tamanoFuente = fuenteGuardada || 'normal';
    this.idioma = idiomaGuardado || 'es';

    this.aplicarTema();
    this.aplicarTamanoFuente();
  }

  onTemaCambiado(event: any) {
    this.temaOscuro = event.detail.checked;
    localStorage.setItem('temaOscuro', JSON.stringify(this.temaOscuro));
    this.aplicarTema();
  }

  onTamanoFuenteCambiado(event: any) {
    this.tamanoFuente = event.detail.value;
    localStorage.setItem('tamanoFuente', this.tamanoFuente);
    this.aplicarTamanoFuente();
  }

  onIdiomaCambiado(event: any) {
    this.idioma = event.detail.value;
    localStorage.setItem('idioma', this.idioma);
  }

  aplicarTema() {
    if (this.temaOscuro) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  aplicarTamanoFuente() {
    document.body.classList.remove('fuente-normal', 'fuente-grande');
    document.body.classList.add(`fuente-${this.tamanoFuente}`);
  }
}