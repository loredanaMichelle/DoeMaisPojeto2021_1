import { Component } from '@angular/core';
import { Usuario } from './usuarios/usuario.model';
import { Campanha } from './campanhas/campanha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoeMaisProj';
  usuarios: Usuario[] = [];

  onUsuarioRegistrado(usuario) {
    this.usuarios = [...this.usuarios,usuario];
    console.log(usuario);
    }

  
}

