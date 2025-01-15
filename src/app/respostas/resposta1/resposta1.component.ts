import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'resposta-1',
    templateUrl: './resposta1.component.html',
    styleUrls: ['./resposta1.component.css']
})

export class Resposta1Component implements OnInit {

    respostaPergunta1?: string;

    constructor() { }

    ngOnInit(): void {
        this.respostaTecnica_1();
    }

    respostaTecnica_1(): void {
        /*
         *   1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
         *   Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
         *   Imprimir(SOMA);
         *   Ao final do processamento, qual será o valor da variável SOMA?
         */

        const indice = 13;
        let soma = 0;
        let k = 0;

        while (k < indice) {
            k = k + 1;
            soma = soma + k;
        }

        console.log('Resultado:', soma);

        this.respostaPergunta1 = `${soma}`;
    }
}
