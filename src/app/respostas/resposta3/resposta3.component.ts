import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'resposta-3',
    templateUrl: './resposta3.component.html',
    styleUrls: ['./resposta3.component.css']
})

export class Resposta3Component implements OnInit {

    faturamento: { dia: number; faturamento: number }[] = [];
    menorFaturamento: number | null = null;
    maiorFaturamento: number | null = null;
    diasAcimaMedia: number = 0;
    mensagem: string = '';

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.respostaTecnica_3();
    }

    respostaTecnica_3(): void {
        /*
         *   3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
         *   • O menor valor de faturamento ocorrido em um dia do mês;
         *   • O maior valor de faturamento ocorrido em um dia do mês;
         *   • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
         *
         *   IMPORTANTE:
         *   a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
         *   b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
         */
        this.carregarDados();
    }

    carregarDados(): void {
        this.http.get<{ dia: number; faturamento: number }[]>('assets/faturamento.json')
            .subscribe(
                data => {
                this.faturamento = data;
                this.calcularFaturamento();
            },
            error => {
                this.mensagem = 'Erro ao carregar os dados de faturamento.';
                console.error(error);
            }
        );
    }

    calcularFaturamento() {
        const faturamentoValido = this.faturamento.filter(f => f.faturamento > 0);
        
        if (faturamentoValido.length === 0) {
            this.mensagem = 'Não há dados de faturamento válido para análise.';
            this.toastr.warning(this.mensagem, 'Alerta!');
            return;
        }
    
        // Menor e maior faturamento
        this.menorFaturamento = Math.min(...faturamentoValido.map(f => f.faturamento));
        this.maiorFaturamento = Math.max(...faturamentoValido.map(f => f.faturamento));
    
        // Média mensal
        const somaFaturamento = faturamentoValido.reduce((acc, f) => acc + f.faturamento, 0);
        const mediaMensal = somaFaturamento / faturamentoValido.length;
    
        // Dias acima da média
        this.diasAcimaMedia = faturamentoValido.filter(f => f.faturamento > mediaMensal).length;
    
        this.mensagem = `Cálculo concluído com sucesso!`;
        this.toastr.success(this.mensagem, 'Sucesso');
    }
}
