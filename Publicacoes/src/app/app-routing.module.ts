import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent as AutorComponent } from './autor/autor.component';
import { LivroComponent } from './livro/livro.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},

    { path: 'autor', component: AutorComponent}, 
    { path: 'livro', component: LivroComponent},  
    { path: 'assunto', component: AssuntoComponent},
    { path: 'perfil', component: PerfilComponent},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
