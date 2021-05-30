import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';

@Component({
  selector: 'app-usuario-registra',
  templateUrl: './usuario-registra.component.html',
  styleUrls: ['./usuario-registra.component.css'],
})

export class UsuarioRegistraComponent {
  constructor(public usuarioService: UsuarioService, public dialog: MatDialog)  { }

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  onRegistrarUsuario(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.usuarioService.adicionarUsuario(
      form.value.id,
      form.value.nome,
      form.value.cpf,
      form.value.idade,
      form.value.endereco,
      form.value.celular,
      form.value.tipoSanguineo
    );
    form.resetForm();
  }


}
