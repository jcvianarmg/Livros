import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assunto',
  templateUrl: './assunto.component.html',
  styleUrls: ['./assunto.component.css']
})
export class AssuntoComponent implements OnInit {

  titulo ='Assunto';

   public assunto = [
    {assunto: 'Psicologia'},
    {assunto: 'Desenvolvimento pessoal'},
    {assunto: 'Psicologia'},
    {assunto: 'Desenvolvimento pessoal'},
    {assunto: 'Empreendedorismo'},
    {assunto: 'Psicologia'},
    {assunto: 'Psicologia'},
    {assunto: 'Romance'},
    {assunto: 'Drama'},
    {assunto: 'Policial'},
    {assunto: 'Drama'},
    {assunto: 'Musical'},
    {assunto: 'Romance'},
    {assunto: 'Drama'},
    {assunto: 'Suspense'},
    {assunto: 'Suspense'},
    {assunto: 'Aventura'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
