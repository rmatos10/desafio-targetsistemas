import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'resposta-2',
    templateUrl: './resposta2.component.html',
    styleUrls: ['./resposta2.component.css']
})

export class Resposta2Component implements OnInit {

    numero?: number;
    mensagem?: string;

    constructor(private toastr: ToastrService) { }

    ngOnInit(): void {}

    respostaTecnica_2(): void {
        /*
         *   2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
         *   (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
         *   ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
         *
         *   IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
         */
        this.calcularFibonnaci();
    }

    calcularFibonnaci(): void {

        if (!this.numero || this.numero < 0) {
            this.mensagem = 'Por favor, insira um número válido.';
            return;
        }
      
        let a = 0, b = 1;
        let fibonnaciSequencia: number[] = [a];
      
        while (b <= this.numero) {
            fibonnaciSequencia.push(b);
            const next = a + b;
            a = b;
            b = next;
        }
      
        if (fibonnaciSequencia.includes(this.numero)) {
            this.mensagem = `O número ${this.numero} pertence à sequência de Fibonacci.`;
            this.toastr.success(this.mensagem, 'Sucesso');
        } else {
            this.mensagem = `O número ${this.numero} NÃO pertence à sequência de Fibonacci.`;
            this.toastr.error(this.mensagem, 'Erro');
        }
    }
}
