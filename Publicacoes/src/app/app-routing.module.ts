import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { LivrosComponent } from './livros/livros.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},

    { path: 'autores', component: AutoresComponent}, 
    { path: 'assunto', component: AssuntoComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'livros', component: LivrosComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
