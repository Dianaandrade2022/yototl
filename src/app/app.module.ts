import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/components/inicio/inicio.component';
import { EquipoComponent } from './view/components/equipo/equipo.component';
import { ProyectosComponent } from './view/components/proyectos/proyectos.component';
import { ServiciosComponent } from './view/components/servicios/servicios.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { HomeComponent } from './view/pages/home/home.component';
import { NavComponent } from './view/components/nav/nav.component';
import { AliadosComponent } from './view/components/aliados/aliados.component';
import { NoticiaComponent } from './view/components/noticia/noticia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllNoticesComponent } from './view/pages/all-notices/all-notices.component';
import { environment } from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { CommonModule } from '@angular/common';
import { AuthModule} from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EquipoComponent,
    ProyectosComponent,
    ServiciosComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    AliadosComponent,
    NoticiaComponent,
    AllNoticesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    AuthModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
