import { Component, output, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  edit = output<string>();
  onEdit() {
    this.edit.emit("");
  }
}
