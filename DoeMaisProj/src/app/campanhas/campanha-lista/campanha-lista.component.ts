import { Component, OnInit } from '@angular/core';
import { Campanha } from '../campanha.model'
import { CampanhaService} from '../campanha.service'
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-campanha-lista',
  templateUrl: './campanha-lista.component.html',
  styleUrls: ['./campanha-lista.component.css']
})
export class CampanhaListaComponent implements OnInit {

  campanhas:Campanha[] = [];
  constructor(public campanhaService: CampanhaService) { }


  ngOnInit(): void {
    this.campanhaService.getCampanhas();
  }


}
