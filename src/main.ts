import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Importa las rutas directamente
import { importProvidersFrom } from '@angular/core';  // Importa importProvidersFrom

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule)  // Asegúrate de importar ReactiveFormsModule aquí
  ]
}).catch(err => console.error(err));
