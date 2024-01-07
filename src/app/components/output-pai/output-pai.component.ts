import { Component } from '@angular/core';

@Component({
  selector: 'app-output-pai',
  templateUrl: './output-pai.component.html',
  styleUrls: ['./output-pai.component.scss']
})
export class OutputPaiComponent {

  tituloPai = 'Mostruário de Motos';
  selectedBike: string = '';

  onBikeSelect(value: string) {
    this.selectedBike = value;
    // Testando o console.log
    console.log("Opção selecionada:", value);
  }

}
