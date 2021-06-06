import { Injectable } from '@angular/core';
import { Lembrete } from './lembrete.model'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class LembreteService {
  private lembretes: Lembrete[] = [];
  private listaLembretesAtualizada = new Subject<Lembrete[]>();
  
  constructor(private httpClient: HttpClient){
  }

  getLembretes(): void {
      this.httpClient.get <{mensagem: string, lembretes: any}>('http://localhost:3000/api/lembretes')
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
            this.listaLembretesAtualizada.next([...this.lembretes]);
        }
    )
  }

  getListaDeLembretesAtualizadaObservable(){
    return this.listaLembretesAtualizada.asObservable();
  }

  removerLembrete (id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/lembretes/${id}`).subscribe(() => {
      this.lembretes = this.lembretes.filter((cli) => {
        return cli.id !== id
      });
      this.listaLembretesAtualizada.next([...this.lembretes]);
      })
    }

 
}

