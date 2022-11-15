import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
