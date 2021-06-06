import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';
import { Lembrete } from './campanha.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class CampanhaService {
  private campanhas: Campanha[] = [];
  private listaCampanhasAtualizada = new Subject<Campanha[]>();
  
  private lembretes: Lembrete[] = [];
  private lembreteAtualizado = new Subject<Lembrete[]>();

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
//lembrete
getLembretes(): void {
  this.httpClient.get<{
      mensagem: string, lembretes: any
  }>('http://localhost:3000/api/lembretes')
      .pipe(map((dados) => {
          return dados.lembretes.map(lembrete => {
              return {
              id: lembrete._id,
              campSelect: lembrete.campSelect,
              data: lembrete.data,
              horario: lembrete.horario,
              local: lembrete.local
              }
              })
      }))
      .subscribe(
          (lembretes) => {
              this.lembretes = lembretes;
              this.lembreteAtualizado.next([...this.lembretes]);
          }
      )
}

getLembreteAtualizadoObservable() {
  return this.lembreteAtualizado.asObservable();
}

adicionarLembrete(id: string, campSelect: string, data: string, horario: string, local: string) {
  const lembrete: Lembrete = {
      id: id,
      campSelect: campSelect,
      data: data,
      horario: horario,
      local: local
  };
  this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/lembretes',
      lembrete).subscribe(
        (dados) => {
          console.log(dados.mensagem);
          lembrete.id = dados.id;
          this.lembretes.push(lembrete);
          this.lembreteAtualizado.next([...this.lembretes]);
        }
      )
  }
 

}

