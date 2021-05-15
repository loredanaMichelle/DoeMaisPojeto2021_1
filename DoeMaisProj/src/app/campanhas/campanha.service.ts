import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class CampanhaService {
  private campanhas: Campanha[] = [];
  private listaCampanhasAtualizada = new Subject<Campanha[]>();

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
//teste get campanhas
  //getCampanhas(): void {
    //  let resp = this.httpClient.get('http://localhost:3000/api/campanhas')
      //resp.subscribe((data)=>this.campanhas=data);
  //}


 
}

