import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampanhaListaComponent } from './campanhas/campanha-lista/campanha-lista.component';
import { UsuarioRegistraComponent } from './usuarios/usuario-registra/usuario-registra.component';

const routes: Routes = [
    { path: 'campanhas', component: CampanhaListaComponent },
    { path: '', component: UsuarioRegistraComponent }
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