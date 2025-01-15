import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/estado.model';

@Component({
    selector: 'resposta-4',
    templateUrl: './resposta4.component.html',
    styleUrls: ['./resposta4.component.css']
})

export class Resposta4Component implements OnInit {

    // @ViewChild('dataTableFaturamento', {static: false}) dataTableCartas: any;

    estados: Estado[] = [
        { nome: 'SP', faturamento: 67836.43 },
        { nome: 'RJ', faturamento: 36678.66 },
        { nome: 'MG', faturamento: 29229.88 },
        { nome: 'ES', faturamento: 27165.48 },
        { nome: 'Outros', faturamento: 19849.53 }
    ];
    
    totalFaturamento: number = 0;
    estadosComPercentual: (Estado & { percentual: number })[] = [];
    
    constructor() { }

    ngOnInit(): void {
        this.respostaTecnica_4();
    }

    respostaTecnica_4(): void {
        /*
         *   4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
         *   • SP – R$67.836,43
         *   • RJ – R$36.678,66
         *   • MG – R$29.229,88
         *   • ES – R$27.165,48
         *   • Outros – R$19.849,53
         *
         *   Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
         *   que cada estado teve dentro do valor total mensal da distribuidora.  
         */
        this.calcularPercentual();
    }

    calcularPercentual(): void {
        // Calcula o total do faturamento
        this.totalFaturamento = this.estados.reduce((acc, estado) => acc + estado.faturamento, 0);
    
        // Calcula o percentual de cada estado
        this.estadosComPercentual = this.estados.map(estado => ({
          ...estado,
          percentual: parseFloat(((estado.faturamento / this.totalFaturamento) * 100).toFixed(2))
        }));

        console.log('this.estadosComPercentual', this.estadosComPercentual);
    }
}
