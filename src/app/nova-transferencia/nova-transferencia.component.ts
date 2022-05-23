import { Component, Output, EventEmitter } from '@angular/core';

//decorator de component (metadado) - que add algumas propriedades a nossa classe
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>(); //estamos dizendo que o metodo aoTransferir recebera dados quaisquer

  valor: number; //variavel do tipo number
  destino: number; //variave do tipo number

  transferir() {
    console.log('Solicitada nova transferencia');

    const valorEmitir = { valor: this.valor, destino: this.destino }; /*criamos uma variavel, que
    receberá os dados da variavel valor e destino, contudo, como ambas são variaveis locais da classe,
    criamos uma variavel local que recebera os valores das variaveis da classe, utilizando asssim, o
    this.valor e this.destino*/
    console.log(this.valor, this.destino);
    this.aoTransferir.emit(valorEmitir); /*como a variavel "aoTransferir" é da classe, estamos chamando
    ela com this. e emitindo o que estiver dentro da varivel "valorEmitir"*/

    this.limparCampos();
  }

  limparCampos() {/*esse metodo vai fazer com que quando os valores forem
  digitados eles serão igualados a zero*/
    this.valor;
    this.destino;
  }
}

/*[(ngModel)] -> Two Way Data Bind - Permite que o que for digitado no template (HTML)
 seja repassado pro componente (TS), ou vice e versa*/

/*[ngModel] - Property bind - permite apenas que o que estiver no component (TS), seja repassado ao template (HTML)
se houver alterações no template (HTML) ela não é refletida para o component (TS)*/
