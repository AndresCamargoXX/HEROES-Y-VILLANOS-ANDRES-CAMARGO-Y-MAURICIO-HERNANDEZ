import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { addIcons } from 'ionicons';
import { warning, search, alertCircle, skull } from 'ionicons/icons';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  'warning': warning,
  'search-outline': search,
  'alert-circle-outline': alertCircle,
  'skull': skull

});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()), 
  ],
});