import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthData } from './auth-data.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogService {

  constructor(private httpClient: HttpClient) {
  }

  criarUsuarioLog(email: string, senha: string) {
    const authData: AuthData = {
      email: email,
      password: senha
    }
    this.httpClient.post("http://localhost:3000/api/usuarioLog/signup", authData).subscribe(resposta => {
      console.log(resposta)
    });
  }

  login (email: string, senha: string){
    const authData: AuthData = {
    email: email,
    password: senha
    }
    this.httpClient.post("http://localhost:3000/api/usuarioLog/login", authData).subscribe(resposta => {
    console.log(resposta)
    });
    }
}