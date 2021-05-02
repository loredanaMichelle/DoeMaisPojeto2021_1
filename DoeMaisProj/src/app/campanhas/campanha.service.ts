import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class CampanhaService {
  private campanhas: Campanha[] = [];
  //campanhas: any;

  constructor(private httpClient: HttpClient){

  }

  getCampanhas(): void {
      this.httpClient.get <{mensagem: string, campanhas: any}>('http://localhost:3000/api/campanhas')
        .pipe(map((dados) => {
          return dados.campanhas.map(campanha => {
            return {
              id: campanha._id,
              cnpjInsti: campanha.cnpjInsti,
              titulo: campanha.titulo,
              tipoSang: campanha.tipoSang,
              dataIni: campanha.dataIni,
              dataFim: campanha.dataFim,
              horaIni: campanha.horaIni,
              horaFim: campanha.horaFim
            }
          })
        }))
        .subscribe(
            (campanhas) => {
              this.campanhas = campanhas;
            }
          )
  }

  //getCampanhas(): void {
    //  let resp = this.httpClient.get('http://localhost:3000/api/campanhas')
      //resp.subscribe((data)=>this.campanhas=data);
  //}

 
}

