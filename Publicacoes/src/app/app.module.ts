import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livro/livros.component';
import { AutoresComponent } from './autor/autores.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
   declarations: [
      AppComponent,
      LivrosComponent,
      AutoresComponent,
      AssuntoComponent,
      DashboardComponent,
      DashboardComponent,
      PerfilComponent,
      NavComponent,
      TituloComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
