import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/components/inicio/inicio.component';
import { EquipoComponent } from './view/components/equipo/equipo.component';
import { ProyectosComponent } from './view/components/proyectos/proyectos.component';
import { ServiciosComponent } from './view/components/servicios/servicios.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { ContactoComponent } from './view/components/contacto/contacto.component';
import { LoginComponent } from './view/pages/login/login.component';
import { HomeComponent } from './view/pages/home/home.component';
import { NavComponent } from './view/components/nav/nav.component';
import { AliadosComponent } from './view/components/aliados/aliados.component';
import { NoticiasComponent } from './view/pages/noticias/noticias.component';
import { CrearComponent } from './view/pages/noticias/crear/crear.component';
import { ModificarComponent } from './view/pages/noticias/modificar/modificar.component';
import { NoticiaComponent } from './view/components/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EquipoComponent,
    ProyectosComponent,
    ServiciosComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AliadosComponent,
    NoticiasComponent,
    CrearComponent,
    ModificarComponent,
    NoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
