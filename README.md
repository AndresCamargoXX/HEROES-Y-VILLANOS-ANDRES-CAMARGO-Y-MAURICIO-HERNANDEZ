
# Héroes & Villanos - App Móvil

## 📱 Descripción
Aplicación móvil desarrollada con Ionic + Angular para explorar, buscar y visualizar información de héroes y villanos de comics.

## Características
- **Exploración**: Lista paginada de personajes con infinite scroll
- **Búsqueda**: Por nombre y alias con debounce de 500
- **Filtros**: Por universo, afiliación y ordenamiento
- **Detalles**: Información completa con estadísticas de poder
- **Favoritos**: Persistencia local con Capacitor
- **Offline**: Funcionalidad básica sin conexión

## Stack Tecnológico
- **Frontend**: Ionic 7 + Angular 17
- **Lenguaje**: TypeScript
- **Mobile**: Capacitor
- **Storage**: @capacitor/preferences
- **Estilos**: SCSS + Ionic Components

## Instalación
```bash
git clone [url-del-repositorio]
cd heroes-villanos
npm install
ionic serve