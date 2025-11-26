Héroes & Villanos App 🦸‍♂️🦹‍♀️
Aplicación móvil híbrida desarrollada con Ionic 7, Angular 18 y TypeScript para explorar información de héroes y villanos de los universos Marvel y DC.

📱 Características Principales
Funcionalidades Implementadas ✅
•	Exploración de Personajes: Lista paginada con infinite scroll
•	Búsqueda Avanzada: Por nombre y alias con debounce
•	Filtros Múltiples: Por universo (Marvel/DC) y afiliación (Héroe/Villano)
•	Ordenamiento: Por nombre (A→Z/Z→A) y rating
•	Vista Detallada: Información completa de cada personaje con: 
o	Biografía y primera aparición
o	Estadísticas de poder (Inteligencia, Fuerza, Velocidad)
o	Lista de poderes y debilidades
o	Enlaces externos
•	Sistema de Favoritos: Persistencia local con Capacitor Preferences
•	Modo Offline: Cache de datos y favoritos disponibles sin conexión
•	Ajustes Personalizables: 
o	Tema claro/oscuro
o	Tamaño de fuente (normal/grande)
o	Gestión de datos
•	Compartir: Share sheet nativo para compartir personajes
•	Accesibilidad: Labels ARIA, contraste adecuado, tamaños de touch ≥44px
•	Navegación con Tabs: Explorar, Favoritos y Ajustes

Características Técnicas 🔧
•	Lazy Loading: Módulos cargados bajo demanda
•	Arquitectura Modular: Separación clara de responsabilidades
•	TypeScript Estricto: Tipado fuerte sin any innecesarios
•	Componentes Standalone: Arquitectura moderna de Angular
•	Reactive Programming: RxJS con Observables y BehaviorSubjects
•	Storage API: Persistencia con Capacitor Preferences
•	Optimización de Imágenes: Lazy loading con ion-img


🏗️ Arquitectura del Proyecto
src/
└─ app/
   ├─ core/
   │  └─ services/
   │     ├─ configuracion.spec.ts
   │     ├─ configuracion.ts
   │     ├─ favoritos.spec.ts
   │     ├─ favoritos.ts
   │     ├─ personajes.spec.ts
   │     └─ personajes.ts
   │
   ├─ pages/
   │  ├─ config/
   │  ├─ detalles-personaje/
   │  ├─ explorar/
   │  ├─ favs/
   │  └─ tabs/
   │
   ├─ shared/
   │  └─ components/
   │     └─ filtros/
   │
   ├─ app.component.html
   ├─ app.component.scss
   ├─ app.component.spec.ts
   ├─ app.component.ts
   └─ app.routes.ts
   │
   ├─ assets/
   │  ├─ data/
   │  │  └─ personajes.json
   │  └─ images/
   │     └─ shapes.svg
   │
   ├─ environments/
   │
   └─ theme/
      ├─ global.scss
      ├─ index.html
      ├─ main.ts
      ├─ polyfills.ts
      └─ test.ts

🚀 Instalación y Configuración
Requisitos Previos
•	Node.js v20+
•	npm v10+
•	Ionic CLI
•	Android Studio (para compilación Android)
Instalación
# Instalar Ionic CLI globalmente
npm install -g @ionic/cli

# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd heroes-villains

# Instalar dependencias
npm install

# Instalar Capacitor y dependencias nativas
npm install @capacitor/core @capacitor/cli
npm install @capacitor/preferences @capacitor/share @capacitor/browser
Ejecutar en Desarrollo
# Servidor de desarrollo web
ionic serve

# O en un dispositivo/emulador Android
ionic capacitor run android -l --external
Compilar para Android
# Build del proyecto
ionic build

# Agregar plataforma Android (primera vez)
npx cap add android

# Sincronizar cambios
npx cap sync android

# Abrir en Android Studio
npx cap open android

# Desde Android Studio: Build > Generate Signed Bundle / APK
📦 Dependencias Principales
{
  "@angular/core": "^18.0.0",
  "@ionic/angular": "^7.0.0",
  "@capacitor/core": "^6.0.0",
  "@capacitor/preferences": "^6.0.0",
  "@capacitor/share": "^6.0.0",
  "@capacitor/browser": "^6.0.0",
  "rxjs": "^7.8.0",
  "typescript": "^5.0.0"
}
🎨 Decisiones de Diseño
Datos
•	Mock Local: JSON en assets/data/personajes.json con 15 personajes
•	Incluye personajes de Marvel y DC con información completa
Estado y Cache
•	BehaviorSubjects para estado reactivo de favoritos y settings
•	Cache en memoria del servicio de personajes
•	Persistencia local con Capacitor Preferences
UI/UX
•	Ionic Components nativos para look & feel consistente
•	Skeleton screens durante carga inicial
•	Pull-to-refresh en listas
•	Infinite scroll para paginación
•	Empty states descriptivos con acciones
•	Toasts para feedback de acciones
Accesibilidad
•	Roles y labels ARIA en iconos y acciones
•	Contraste AA mínimo
•	Tamaños de touch ≥44px
•	Soporte de tema oscuro
Tests Implementados
•	CharactersService: búsqueda, filtros, cache
•	StorageService: favoritos, settings, persistencia
•	HighlightPipe: resaltado de términos de búsqueda
•	Componentes: character-card, páginas principales
📱 Características Específicas
Búsqueda
•	Debounce de 400ms para optimizar búsquedas
•	Búsqueda en nombre y aliases
•	Highlight de términos encontrados
Filtros
•	Universo: Marvel, DC, Todos
•	Afiliación: Héroe, Villano, Todos
•	Combinables entre sí
Favoritos
•	Persisten entre sesiones
•	Disponibles offline
•	Sincronización en tiempo real
•	Badge con contador en tab
Offline
•	Favoritos siempre disponibles
•	Último listado cacheado
•	Manejo de errores de red
🔐 Seguridad
•	Sanitización de HTML/URLs con DomSanitizer
•	No se exponen datos sensibles en logs de error
•	Validación de tipos con TypeScript estricto
📊 Rendimiento
•	Lazy loading de páginas y módulos
•	Virtual scrolling con infinite scroll
•	Imágenes lazy con ion-img
•	Cache en memoria de personajes
•	Debounce en búsquedas
🌐 Internacionalización (Futuro)
La estructura está preparada para i18n:
•	Setting de idioma en preferencias
•	Interfaz preparada para integración con @ngx-translate

👨‍💻 Desarrollo
Scripts Disponibles
npm start              # Servidor de desarrollo
npm run build          # Build de producción
npm test              # Tests unitarios
npm run lint          # Linter ESLint
npm run format        # Formatear con Prettier
Convenciones de Código
•	TypeScript: Tipado estricto, sin any
•	Nombres: camelCase para variables, PascalCase para clases
•	Componentes: Standalone architecture
•	Servicios: Singleton con providedIn: 'root'
•	RxJS: Unsubscribe con async pipe cuando sea posible
🔮 Mejoras Futuras
•	[ ] PWA con Service Worker
•	[ ] Animaciones con Ionic Animations
•	[ ] NgRx o Signals Store para estado global
•	[ ] i18n completo (es/en)
•	[ ] Deep links
•	[ ] Notificaciones locales
•	[ ] Tests E2E con Playwright
•	[ ] Integración con API real
