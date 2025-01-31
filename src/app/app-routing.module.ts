import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespostasModule } from './respostas/respostas.module';
import { AuthGuard } from './guards/auth.guard.service';
import { CartasGuard } from './guards/cartas.guard.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
        { 
            path: 'respostas',
            loadChildren: () => RespostasModule,
            canActivateChild: [CartasGuard]
        },
    ]
  },
  // {
  //    Preparado para quando houver necessidade de gerenciar entrada de usuário com login
  //    path: 'login',
  //    component: LoginComponent
  //    canActivate: [NonGuard], // Guadião de rotas abertas
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
