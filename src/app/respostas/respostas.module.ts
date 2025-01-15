import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespostasRoutingModule } from './respostas.routing.module';
import { FormsModule } from '@angular/forms';
import { PesquisarTextoPipe } from '../utils/pesquisar.pipe';
import { RespostasComponent } from './respostas.component';
import { HttpClientModule } from '@angular/common/http';
import { Resposta1Component } from './resposta1/resposta1.component';
import { Resposta2Component } from './resposta2/resposta2.component';
import { Resposta3Component } from './resposta3/resposta3.component';
import { Resposta4Component } from './resposta4/resposta4.component';
import { Resposta5Component } from './resposta5/resposta5.component';

@NgModule({
    declarations: [
        PesquisarTextoPipe,
        RespostasComponent,
        Resposta1Component,
        Resposta2Component,
        Resposta3Component,
        Resposta4Component,
        Resposta5Component,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RespostasRoutingModule
    ]
})

export class RespostasModule { }
