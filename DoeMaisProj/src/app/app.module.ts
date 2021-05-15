import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsuarioRegistraComponent } from './usuarios/usuario-registra/usuario-registra.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

import { UsuarioService } from './usuarios/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { CampanhaListaComponent } from './campanhas/campanha-lista/campanha-lista.component';
import { CampanhaService } from './campanhas/campanha.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioRegistraComponent,
    CabecalhoComponent,
    DialogExampleComponent,
    CampanhaListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSelectModule,
    AppRoutingModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [UsuarioService, CampanhaService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
