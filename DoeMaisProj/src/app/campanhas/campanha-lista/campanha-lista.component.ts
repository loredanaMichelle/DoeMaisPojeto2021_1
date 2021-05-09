import { Component, OnInit } from '@angular/core';
import { Campanha } from '../campanha.model'
import { CampanhaService} from '../campanha.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-campanha-lista',
  templateUrl: './campanha-lista.component.html',
  styleUrls: ['./campanha-lista.component.css']
})
export class CampanhaListaComponent implements OnInit{

  campanhas:Campanha[] = [];
  //private campanhasSubscription!: Subscription;

  constructor(public campanhaService: CampanhaService) { }


  /* ngOnInit(): void {
    this.campanhaService.getCampanhas();
  } */

  ngOnInit(): void {
    this.campanhaService.getCampanhas();
    this.campanhaService.getListaDeCampanhasAtualizadaObservable()
    .subscribe((campanhas: Campanha[]) => {
        this.campanhas = campanhas;
      });
  }

}
