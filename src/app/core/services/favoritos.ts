import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Personaje } from './personajes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private claveFavoritos = 'personajesFavoritos';
  private favoritosSubject = new BehaviorSubject<Personaje[]>([]);
  public favoritos$ = this.favoritosSubject.asObservable();

  constructor() {
    this.cargarFavoritos();
  }

  private async cargarFavoritos() {
    const resultado = await Preferences.get({ key: this.claveFavoritos });
    if (resultado.value) {
      this.favoritosSubject.next(JSON.parse(resultado.value));
    }
  }

  async obtenerFavoritos(): Promise<Personaje[]> {
    return this.favoritosSubject.value;
  }

  async agregarFavorito(personaje: Personaje): Promise<void> {
    const favoritos = await this.obtenerFavoritos();
    const yaExiste = favoritos.find(fav => fav.id === personaje.id);
    if (!yaExiste) {
      favoritos.push(personaje);
      await this.guardarFavoritos(favoritos);
    }
  }

  async eliminarFavorito(idPersonaje: string): Promise<void> {
    const favoritos = await this.obtenerFavoritos();
    const favoritosActualizados = favoritos.filter(fav => fav.id !== idPersonaje);
    await this.guardarFavoritos(favoritosActualizados);
  }

  async eliminarDeFavoritos(idPersonaje: string): Promise<void> {
    await this.eliminarFavorito(idPersonaje);
  }

  async esFavorito(idPersonaje: string): Promise<boolean> {
    const favoritos = await this.obtenerFavoritos();
    return favoritos.some(fav => fav.id === idPersonaje);
  }

  async alternarFavorito(personaje: Personaje): Promise<void> {
  const esFav = await this.esFavorito(personaje.id);
  if (esFav) {
    await this.eliminarFavorito(personaje.id);
  } else {
    await this.agregarFavorito(personaje);
  }
  // No necesitamos llamar a cargarFavoritos porque ya se actualiza en guardarFavoritos
}

  private async guardarFavoritos(favoritos: Personaje[]) {
    await Preferences.set({
      key: this.claveFavoritos,
      value: JSON.stringify(favoritos)
    });
    this.favoritosSubject.next(favoritos);
  }


}