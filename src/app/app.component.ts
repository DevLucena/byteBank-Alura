import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  constructor(
    private service: TransferenciaService //estamos injetando o componente de SERVIÇO nesse componente
  ){}

  /*valor: number; //declaramos outra variavel com o nome de valor do tipo number que será usada
   no "app.component.html" para mostrar o que foi digitado
  destino: number; //declaramos outra variavel com o nome de destino do tipo number que será usada
   no "app.component.html" para mostrar o que foi digitado

   Ambas foram comentadas pois a utilizaremos de outras formas

  transferencias: any[] = []; //criamos uma variavel do tipo "ANY" (que significa que ela ira armazenar
   qualquer tipo de dado), estava recebendo os dados do $event*/

  transferir($event) {
    this.service.adicionar($event)
     /* //esse metodo transferir, ira escutar o (EventEmitter) do metodo "aoTransferir" da
     classe "nova-transferencia.ts"

    //console.log($event); // como o EventEmitter ira receber dois dados (valor e destino),
     ele nos retornará um objeto com ambos os valores (o retiramos daqui pois trataremos os dados
      nos componentes filhos).

    //const transferencia = {...$event, data: new Date()} - (o retiramos daqui pois trataremos os dados
      nos componentes filhos).

    //this.transferencias.push(transferencia); - (o retiramos daqui pois trataremos os dados
      nos componentes filhos).*/
  }
}
