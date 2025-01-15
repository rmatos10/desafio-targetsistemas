import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RespostasComponent } from './respostas.component';

const routes = [
    { path: '', component: RespostasComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class RespostasRoutingModule {}
