import { Component, OnInit } from '@angular/core';
import { Campanha } from '../campanha.model'
import { CampanhaService} from '../campanha.service'
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-campanha-lista',
  templateUrl: './campanha-lista.component.html',
  styleUrls: ['./campanha-lista.component.css']
})
export class CampanhaListaComponent implements OnInit{

  campanhas:Campanha[] = [];
  //filtro
  myControl = new FormControl();
  options: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-', 'Todos'];
  dataSource = new MatTableDataSource(this.campanhas);
  constructor(public campanhaService: CampanhaService) { }

  ngOnInit(): void {
    this.campanhaService.getCampanhas();
    this.campanhaService.getListaDeCampanhasAtualizadaObservable()
    .subscribe((campanhas: Campanha[]) => {
        this.campanhas = campanhas;
      });
      
  }

  applyFilter(tipoSang: string){
    this.campanhaService.getTipoSang(tipoSang);
  }

  //lembrete
  onLembrete(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.campanhaService.adicionarLembrete(
      form.value.id,
      form.value.campSelect,
      form.value.data,
      form.value.horario,
      form.value.local
    );
    form.resetForm();
  }
  

}
