import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit, OnDestroy{
  
  lembretes:Lembrete[] = [];
  dataSource = new MatTableDataSource(this.lembretes);
  private lembretesSubscription!: Subscription;
  constructor(public lembreteService: LembreteService) { }

  ngOnDestroy(): void {
    this.lembretesSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.lembreteService.getLembretes();
    this.lembretesSubscription = this.lembreteService
    .getListaDeLembretesAtualizadaObservable()
    .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      });
      
  }

  onDelete (id: string){
    this.lembreteService.removerLembrete(id);
  }


}
