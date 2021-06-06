import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampanhaListaComponent } from './campanhas/campanha-lista/campanha-lista.component';
import { UsuarioRegistraComponent } from './usuarios/usuario-registra/usuario-registra.component';
import { LembreteListaComponent } from './lembretes/lembrete-lista/lembrete-lista.component';
import { RegraListaComponent } from './regras/regra-lista/regra-lista.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: UsuarioRegistraComponent },
    { path: 'campanhas', component: CampanhaListaComponent },
    { path: 'lembretes', component: LembreteListaComponent },
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