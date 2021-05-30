import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogService } from '../usuario-log.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usuarioLogService: UsuarioLogService) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    if (form.invalid) return;
    this.usuarioLogService.criarUsuarioLog(form.value.email, form.value.password);
  }



}
