import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UsuarioService {
    private usuarios: Usuario[] = [];
    private registroUsuariosAtualizado = new Subject<Usuario[]>();

    constructor(private httpClient: HttpClient) {

    }

    getUsuarios(): void {
        this.httpClient.get<{
            mensagem: string, usuarios: any
        }>('http://localhost:3000/api/registro')
            .pipe(map((dados) => {
                return dados.usuarios.map(usuario => {
                    return {
                    id: usuario._id,
                    nome: usuario.nome,
                    cpf: usuario.cpf,
                    idade: usuario.idade,
                    endereco: usuario.endereco,
                    celular: usuario.celular,
                    tipoSanguineo: usuario.tipoSanguineo
                    }
                    })
            }))
            .subscribe(
                (usuarios) => {
                    this.usuarios = usuarios;
                    this.registroUsuariosAtualizado.next([...this.usuarios]);
                }
            )
    }

    getRegistroUsuariosAtualizadoObservable() {
        return this.registroUsuariosAtualizado.asObservable();
    }

    adicionarUsuario(id:string, nome: string, cpf: string, idade: string, endereco: string, celular: string, tipoSanguineo: string) {
        const usuario: Usuario = {
            id: id,
            nome: nome,
            cpf: cpf,
            idade: idade,
            endereco: endereco,
            celular: celular,
            tipoSanguineo: tipoSanguineo
        };
        this.httpClient.post<{ mensagem: string }>('http://localhost:3000/api/registro',
            usuario).subscribe(
                (dados) => {
                    console.log(dados.mensagem);
                    this.usuarios.push(usuario);
                    this.registroUsuariosAtualizado.next([...this.usuarios]);
                }
            )
    }

}