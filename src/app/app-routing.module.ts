import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/pages/login/login.component';
import { HomeComponent } from './view/pages/home/home.component';
import { NoticiasComponent } from './view/pages/noticias/noticias.component';
import { CrearComponent } from './view/pages/noticias/crear/crear.component';
import { ModificarComponent } from './view/pages/noticias/modificar/modificar.component';

const routes: Routes = [
  {
    path:'inicio',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'admin/noticias',
    component:NoticiasComponent
  },
  {
    path:'admin/noticias/crear',
    component:CrearComponent
  },
  {
    path:'admin/noticias/modificar',
    component:ModificarComponent
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
