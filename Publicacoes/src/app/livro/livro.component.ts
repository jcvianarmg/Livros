import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {

  titulo ='Livro';

   public livro = [
    {nome: 'Mentes Extraordinárias'},
    {nome: 'Quem pensa enriquece'},
    {nome: 'As armas da persuasão 2.0'},
    {nome: 'Aborda a boa administração do tempo até os cuidados com a saúde'},
    {nome: 'Mente de vencedor'},
    {nome: 'O poder do silêncio'},
    {nome: 'O poder de confiar em você mesmo'},
    {nome: 'A Outra Sra. Parrish'},
    {nome: 'Belas adormecidas'},
    {nome: 'Bom dia, Verônica'},
    {nome: 'Nunca jamais'},
    {nome: 'Nick & Norah - Uma noite de amor e música'},
    {nome: 'Olho por olho'},
    {nome: 'Will & Will'},
    {nome: 'A Casa Negra'},
    {nome: 'A última testemunha'},
    {nome: 'O Talismã'},
  ];

}
