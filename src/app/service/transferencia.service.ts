import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  /*criamos esse service para ser injetado nos outros componentes, por isso ele tem o decorator
  @Injectable */

  private listaDeTransferencia: any[]; //criamos uma "propriedade", que ira receber qualquer tipo de dado
  private url: 'http://localhost:3000/transferencias';

  constructor(
    private httpClient: HttpClient //nos prover requisições do tipo get, push, etc.
  ) {
    this.listaDeTransferencia = []; //aqui estamos chamando a propriedade no constructor
  }

  get transferencias() {
    //metodo para pegar as transferencias que são realizadas
    return this
      .listaDeTransferencia; /*ele nos retornará todas as transferencias realizadas, tendo em vista
    que criamos uma propriedade de array, logo ele poderá armazenar todas as transferencias realizadas
    */
  }

  adicionar(transferencia: any) {
    //metodo para adicionar nova transferencia
    this.hidratar(transferencia); /* aqui ele usará o metodo criado a baixo para pegar a data e horario
    e armazenar na propriedade local*/
    this.listaDeTransferencia.push(transferencia); /*aqui ele pegará os dados do array de transferencia
    valor e destino, e os armazenará na propriedade local aqui criada
    */
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url); /*aqui estamos retornando uma requisição feita no transferencia, para
    isso estamos pegando o (this.url) do nosso objeto de <Transferencia[]> < ---- isso aqui é um observable, o que significa
    ele ele ficará de "olho" e assim que for requisitado nos trará alguma resposta da requisição, para isso estamos usando o metodo
    get, essa requisição será realizada por intermedio do this.httpClient*/
  }

  private hidratar(transferencia: any) {
    // esse metodo será onde colocaremos as "regras de negocio"
    transferencia.data = new Date(); //estamos pegando a data, e a armazenando em uma propriedade local
  }
}
