import { Component, OnInit, NgModule } from '@angular/core';

import { FRASES } from './frase-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';
  
  constructor() { }

  ngOnInit() {
    console.log(this.frases);
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
}
