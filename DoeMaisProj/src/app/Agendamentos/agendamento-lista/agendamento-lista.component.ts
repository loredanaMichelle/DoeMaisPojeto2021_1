import { Component, OnInit, OnDestroy } from '@angular/core';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-agendamento-lista',
  templateUrl: './agendamento-lista.component.html',
  styleUrls: ['./agendamento-lista.component.css']
})
export class AgendamentoListaComponent implements OnInit, OnDestroy{
  
  agendamentos:Agendamento[] = [];
  dataSource = new MatTableDataSource(this.agendamentos);
  private agendamentosSubscription!: Subscription;
  constructor(public agendamentoService: AgendamentoService) { }

  ngOnDestroy(): void {
    this.agendamentosSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.agendamentoService.getAgendamentos();
    this.agendamentosSubscription = this.agendamentoService
    .getListaDeAgendamentosAtualizadaObservable()
    .subscribe((agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      });
      
  }

  onDelete (id: string){
    this.agendamentoService.removerAgendamento(id);
  }


}
