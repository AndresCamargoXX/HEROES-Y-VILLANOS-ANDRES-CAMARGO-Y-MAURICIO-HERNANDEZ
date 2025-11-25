import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService, Personaje } from '../../core/services/personajes';
import { FavoritosService } from '../../core/services/favoritos';
import { addIcons } from 'ionicons';
import { 
  star, 
  starOutline, 
  arrowBack
} from 'ionicons/icons';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.page.html',
  styleUrls: ['./detalles-personaje.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButton,
    IonIcon,
    IonButtons,
    CommonModule
  ]
})
export class DetallesPersonajePage implements OnInit {
  personaje: Personaje | undefined;
  cargando: boolean = true;
  esFavorito: boolean = false;
  powerStatsArray: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajesService,
    private favoritosService: FavoritosService
  ) { 
    addIcons({
      arrowBack,
      star,
      'starOutline': starOutline
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      await this.cargarPersonaje(id);
    } else {
      this.cargando = false;
    }
  }

  cargarPersonaje(id: string) {
    this.personajesService.getPersonajeById(id).subscribe({
      next: (personaje) => {
        if (personaje) {
          this.personaje = personaje;
          this.initializePowerStats();
          this.cargarEstadoFavorito();
        }
        this.cargando = false;
      },
      error: (error) => {
        this.cargando = false;
      }
    });
  }

  initializePowerStats() {
    if (!this.personaje) return;
    
    this.powerStatsArray = [
      { name: 'Inteligencia', value: this.personaje.powerStats.intelligence },
      { name: 'Fuerza', value: this.personaje.powerStats.strength },
      { name: 'Velocidad', value: this.personaje.powerStats.speed },
      { name: 'Durabilidad', value: this.personaje.powerStats.durability },
      { name: 'Poder', value: this.personaje.powerStats.power },
      { name: 'Combate', value: this.personaje.powerStats.combat }
    ].filter(stat => stat.value !== null && stat.value !== undefined);
  }

  volverAInicio() {
    window.history.back();
  }

  async alternarFavorito() {
  if (this.personaje) {
    try {
      await this.favoritosService.alternarFavorito(this.personaje);
      this.esFavorito = !this.esFavorito;
      // Quitamos esta línea: await this.favoritosService.cargarFavoritos();
    } catch (error) {
      console.error('Error alternando favorito:', error);
    }
  }
}

  private async cargarEstadoFavorito() {
    if (this.personaje) {
      try {
        this.esFavorito = await this.favoritosService.esFavorito(this.personaje.id);
      } catch (error) {
        console.error('Error cargando favorito:', error);
      }
    }
  }
}