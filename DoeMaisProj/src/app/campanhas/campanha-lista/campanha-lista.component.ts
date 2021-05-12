import { Component, OnInit } from '@angular/core';
import { Campanha } from '../campanha.model'
import { CampanhaService} from '../campanha.service'
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-campanha-lista',
  templateUrl: './campanha-lista.component.html',
  styleUrls: ['./campanha-lista.component.css']
})
export class CampanhaListaComponent implements OnInit{

  campanhas:Campanha[] = [];
  //teste filtro
  
  myControl = new FormControl();
  options: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-', 'Todos'];
  //private campanhasSubscription!: Subscription;
  //displayedColumns: string[]=['tipoSang'];
  dataSource = new MatTableDataSource(this.campanhas);
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

  /* applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  } */

  applyFilter(tipoSang: string){
    this.campanhaService.getTipoSang(tipoSang);
  }



}
