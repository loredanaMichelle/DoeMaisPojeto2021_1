import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';
import { Agendamento } from './campanha.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class CampanhaService {
  private campanhas: Campanha[] = [];
  private listaCampanhasAtualizada = new Subject<Campanha[]>();
  
  private agendamentos: Agendamento[] = [];
  private agendamentoAtualizado = new Subject<Agendamento[]>();

  constructor(private httpClient: HttpClient){
  }

  getCampanhas(): void {
      this.httpClient.get <{mensagem: string, campanhas: any}>('http://localhost:3000/api/campanhas')
        .pipe(map((dados) => {
          return dados.campanhas.map((campanha: any) => {
            return {
              id: campanha._id,
              cnpjInsti: campanha.cnpjInsti,
              titulo: campanha.titulo,
              tipoSang: campanha.tipoSang,
              dataIni: campanha.dataIni,
              dataFim: campanha.dataFim,
              horaIni: campanha.horaIni,
              horaFim: campanha.horaFim,
              local: campanha.local
            }
          })
        }))
        .subscribe(
            (campanhas) => {
              this.campanhas = campanhas;
              this.listaCampanhasAtualizada.next([...this.campanhas])
            }
          )
  }

  getListaDeCampanhasAtualizadaObservable(){
    return this.listaCampanhasAtualizada.asObservable();
  }

  getTipoSang(tipoSang: string): void {
    this.httpClient.get('http://localhost:3000/api/campanhas/${tipoSang}').subscribe(() =>{
      this.campanhas = this.campanhas.filter((cli) => {
        return cli.tipoSang == tipoSang
      });
      this.listaCampanhasAtualizada.next([...this.campanhas]);
    })
}
//agendamento
getAgendamentos(): void {
  this.httpClient.get<{
      mensagem: string, agendamentos: any
  }>('http://localhost:3000/api/agendamentos')
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
              this.agendamentoAtualizado.next([...this.agendamentos]);
          }
      )
}

getAgendamentoAtualizadoObservable() {
  return this.agendamentoAtualizado.asObservable();
}

adicionarAgendamento(id: string, campSelect: string, data: string, horario: string, local: string) {
  const agendamento: Agendamento = {
      id: id,
      campSelect: campSelect,
      data: data,
      horario: horario,
      local: local
  };
  this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/agendamentos',
      agendamento).subscribe(
        (dados) => {
          console.log(dados.mensagem);
          agendamento.id = dados.id;
          this.agendamentos.push(agendamento);
          this.agendamentoAtualizado.next([...this.agendamentos]);
        }
      )
  }
 
}

