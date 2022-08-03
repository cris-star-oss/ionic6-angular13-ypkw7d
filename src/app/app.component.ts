import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valorEmprestimo: number;
  taxaJuros: number;
  quantidadeMeses: number;
  valorFinal: number;
  valorPrestacao: number;

  constructor() {}

  simulacaoEmprestimo() {
    let i = 1;
    this.taxaJuros = this.taxaJuros / 100 + 1;
    this.valorFinal = this.valorEmprestimo;
    while (i <= this.quantidadeMeses) {
      this.valorFinal = this.valorFinal * this.taxaJuros;
      i++;
    }
    this.valorPrestacao = this.valorFinal / this.quantidadeMeses;
  }

  ionViewDidEnter() {}
}
