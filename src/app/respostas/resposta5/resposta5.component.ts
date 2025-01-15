import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'resposta-5',
    templateUrl: './resposta5.component.html',
    styleUrls: ['./resposta5.component.css']
})

export class Resposta5Component implements OnInit {
    
    palavraOriginal: string = 'Rafael';
    resultado?: string;

    constructor() { }

    ngOnInit(): void {
        this.respostaTecnica_5();
    }

    respostaTecnica_5(): void {
        /*
         *   5) Escreva um programa que inverta os caracteres de um string.
         *
         *   IMPORTANTE:
         *   a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
         *   b) Evite usar funções prontas, como, por exemplo, reverse;
         *
         */
        this.inverterString();
    }

    inverterString(): string {
        let resultadoString = '';
        
        // Percorre a string de trás para frente
        for (let i = this.palavraOriginal.length - 1; i >= 0; i--) {
            resultadoString += this.palavraOriginal[i];
        }
        
        return this.resultado = resultadoString;
    }
}
