import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from 'src/app/lista/lista.component';
import { CadastroComponent } from 'src/app/cadastro/cadastro.component';

const autenticacaoRoutes: Routes = [
  { path: '', component: ListaComponent },
  { path:'medicos', component: ListaComponent },
  { path:'cadastro', component: CadastroComponent },
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(autenticacaoRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
