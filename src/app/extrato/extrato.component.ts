import { TransferenciaService } from './../service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //@Input () transferencias:any [] = [];

  @Input() transferencias:any [] //será aqui que o resultado inserido no parametro do metodo abaixo será colocado

  constructor(
    private service: TransferenciaService
  ) { }

  ngOnInit(){
   //this.transferencias = this.service.transferencias
   this.service.todas().subscribe((transferencias: Transferencia[]) =>{
     console.table(transferencias);
     this.transferencias = transferencias;
   })
  }

}
