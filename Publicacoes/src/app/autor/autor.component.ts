import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  public titulo ='Autor';

   public autor = [
    {nome: 'Alberto Dell’Isola'},
    {nome: 'Napoleon Hill'},
    {nome: 'Robert B. Cialdini e Edmundo Barreiros'},
    {nome: 'Renato Cardoso'},
    {nome: 'Paulo Sergio Buhrer'},
    {nome: 'Eckhart Tolle, Regina da Veiga Pereira'},
    {nome: 'O poder de confiar em você mesmo'},
    {nome: 'A Outra Pete Rissatti e Liv Constantine. Parrish'},
    {nome: 'BelStephen King, Owen Kingas adormecidas'},
    {nome: 'Montes, Ilana Casoy'},
    {nome: 'Nunca jamaiColleen Hoover (Autor), Tarryn Fisher (Autor), Priscila Catão (Tradutor)s'},
    {nome: 'David Levithan'},
    {nome: 'Jenny Han e Siobhan Vivian'},
    {nome: 'David Levithan e Raquel Zampil'},
    {nome: 'Stephen King, Peter Straub'},
    {nome: 'Liv Constantine e Érico Assis'},
    {nome: 'Stephen King e Peter Straub'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
