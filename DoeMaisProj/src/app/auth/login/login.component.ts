import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UsuarioLogService } from '../usuario-log.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioLogService: UsuarioLogService) { }

  ngOnInit(): void {
  }

  onLogin (form: NgForm){
    if (form.invalid) return;
    this.usuarioLogService.login(form.value.email, form.value.password);
    }

}
