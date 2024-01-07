import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-filho',
  templateUrl: './input-filho.component.html',
  styleUrls: ['./input-filho.component.scss']
})
export class InputFilhoComponent {

  @Input('titulo') tituloFilho = '';

  @Output() selectionChanged = new EventEmitter<string>();

  onSelect(event: Event) {
    // usando type assertion
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.selectionChanged.emit(value);
  }

}
