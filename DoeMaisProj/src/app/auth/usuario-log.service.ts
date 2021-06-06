import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthData } from './auth-data.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogService {

  constructor(private httpClient: HttpClient,
    private router: Router
    ) {
  }

  criarUsuarioLog(email: string, senha: string) {
    const authData: AuthData = {
      email: email,
      password: senha
    }
    this.httpClient.post("http://localhost:3000/api/usuarioLog/signup", authData).subscribe(resposta => {
      console.log(resposta)
    });
    this.router.navigate(['/'])
  }


  login (email: string, senha: string){
    const authData: AuthData = {
    email: email,
    password: senha
    }
    this.httpClient.post("http://localhost:3000/api/usuarioLog/login", authData).subscribe(resposta => {
    console.log(resposta)
    });
    this.router.navigate(['/campanhas'])
    }

    
}