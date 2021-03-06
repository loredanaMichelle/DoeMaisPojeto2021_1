import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import {DatePipe} from "@angular/common";
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { UsuarioService } from './usuarios/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { CampanhaListaComponent } from './campanhas/campanha-lista/campanha-lista.component';
import { CampanhaService } from './campanhas/campanha.service';
import { RegraListaComponent } from './regras/regra-lista/regra-lista.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LembreteListaComponent } from './lembretes/lembrete-lista/lembrete-lista.component';
import { LembreteService } from './lembretes/lembrete.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioRegistraComponent,
    CabecalhoComponent,
    DialogExampleComponent,
    CampanhaListaComponent,
    LembreteListaComponent,
    RegraListaComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule
  ],
  providers: [UsuarioService, CampanhaService, LembreteService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
