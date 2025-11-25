import { Component, OnInit } from '@angular/core';
import { 
  IonApp, 
  IonRouterOutlet 
} from '@ionic/angular/standalone';
import { ConfiguracionService } from './core/services/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  
  constructor(private configuracionService: ConfiguracionService) {}

  ngOnInit() {
    // Cargar la configuración cuando la app se inicia
    this.configuracionService.cargarConfiguracionInicial();
  }
}