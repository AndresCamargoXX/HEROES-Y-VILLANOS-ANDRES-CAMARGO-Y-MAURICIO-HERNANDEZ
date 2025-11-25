import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonSegment, 
  IonSegmentButton, 
  IonLabel,
  IonItem,
  ModalController 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  close, 
  people, 
  star, 
  swapVertical, 
  arrowUp, 
  arrowDown, 
  trendingUp, 
  trendingDown, 
  checkmark, 
  refresh,
  planet,
  shieldHalf,
  skull
} from 'ionicons/icons';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonSegment, 
    IonSegmentButton, 
    IonLabel,
    IonItem
  ]
})
export class FiltrosComponent {
  @Input() afiliacion: string = '';
  @Input() universo: string = '';
  @Input() orden: string = 'nombre-asc';

  constructor(private modalCtrl: ModalController) {
    addIcons({ 
      close, 
      people, 
      star, 
      swapVertical, 
      arrowUp, 
      arrowDown, 
      trendingUp, 
      trendingDown, 
      checkmark, 
      refresh,
      planet,
      shieldHalf,
      skull
    });
  }

  onAfiliacionChange(event: any) {
    this.afiliacion = event.detail.value;
  }

  onUniversoChange(event: any) {
    this.universo = event.detail.value;
  }

  onOrdenChange(event: any) {
    this.orden = event.detail.value;
  }

  limpiar() {
    this.afiliacion = '';
    this.universo = '';
    this.orden = 'nombre-asc';
  }

  aplicar() {
    this.modalCtrl.dismiss({
      afiliacion: this.afiliacion,
      universo: this.universo,
      orden: this.orden
    }, 'aplicar');
  }

  cerrar() {
    this.modalCtrl.dismiss(null, 'cancelar');
  }
}