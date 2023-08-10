import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/pages/home/home.component';
import { AllNoticesComponent } from './view/pages/all-notices/all-notices.component';
const routes: Routes = [
  {
    path:'inicio',
    component:HomeComponent,
  },
  {
    path:'home/noticias',
    component:AllNoticesComponent
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
