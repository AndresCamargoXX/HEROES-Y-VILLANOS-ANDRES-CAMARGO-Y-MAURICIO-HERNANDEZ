import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonAvatar,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Personaje } from '../../core/services/personajes';
import { FavoritosService } from '../../core/services/favoritos';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonIcon,
    IonButton,
    CommonModule,
    RouterModule
  ]
})
export class FavsPage implements OnInit, OnDestroy  {
  favoritos: Personaje[] = [];
  cargando: boolean = true;
  private favoritosSubscription!: Subscription;

  constructor(private favoritosService: FavoritosService) {
    addIcons({ star });
  }

  ngOnInit() {
    this.favoritosSubscription = this.favoritosService.favoritos$.subscribe(favoritos => {
      this.favoritos = favoritos;
      this.cargando = false;
    });
  }

  ngOnDestroy() {
    if (this.favoritosSubscription) {
      this.favoritosSubscription.unsubscribe();
    }
  }

  async eliminarFavorito(personaje: Personaje, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    
    try {
      await this.favoritosService.eliminarFavorito(personaje.id);
    } catch (error) {
      console.error('Error eliminando favorito:', error);
    }
  }

  getTextoAfiliacion(afiliacion: string): string {
    if (afiliacion === 'Hero') return 'Héroe';
    if (afiliacion === 'Villain') return 'Villano';
    return afiliacion;
  }
}