import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampanhaListaComponent } from './campanhas/campanha-lista/campanha-lista.component';
import { UsuarioRegistraComponent } from './usuarios/usuario-registra/usuario-registra.component';
import { AgendamentoListaComponent } from './agendamentos/agendamento-lista/agendamento-lista.component';
import { RegraListaComponent } from './regras/regra-lista/regra-lista.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: UsuarioRegistraComponent },
    { path: 'campanhas', component: CampanhaListaComponent },
    { path: 'agendamentos', component: AgendamentoListaComponent },
    { path: 'regras', component: RegraListaComponent},
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}