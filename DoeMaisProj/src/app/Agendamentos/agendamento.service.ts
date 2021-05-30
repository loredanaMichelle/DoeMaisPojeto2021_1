import { Injectable } from '@angular/core';
import { Agendamento } from './agendamento.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AgendamentoService {
  private agendamentos: Agendamento[] = [];
  private listaAgendamentosAtualizada = new Subject<Agendamento[]>();
  
  constructor(private httpClient: HttpClient){
  }

  getAgendamentos(): void {
      this.httpClient.get <{mensagem: string, agendamentos: any}>('http://localhost:3000/api/agendamentos')
      .pipe(map((dados) => {
        return dados.agendamentos.map(agendamento => {
            return {
            id: agendamento._id,
            campSelect: agendamento.campSelect,
            data: agendamento.data,
            horario: agendamento.horario,
            local: agendamento.local
            }
            })
    }))
    .subscribe(
        (agendamentos) => {
            this.agendamentos = agendamentos;
            this.listaAgendamentosAtualizada.next([...this.agendamentos]);
        }
    )
  }

  getListaDeAgendamentosAtualizadaObservable(){
    return this.listaAgendamentosAtualizada.asObservable();
  }

  removerAgendamento (id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/agendamentos/${id}`).subscribe(() => {
      this.agendamentos = this.agendamentos.filter((cli) => {
        return cli.id !== id
      });
      this.listaAgendamentosAtualizada.next([...this.agendamentos]);
      })
    }

 
}

