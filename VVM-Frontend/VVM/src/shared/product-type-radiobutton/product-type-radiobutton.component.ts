import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-type-radiobutton',
  standalone: true,
  imports: [],
  templateUrl: './product-type-radiobutton.component.html',
  styleUrl: './product-type-radiobutton.component.scss'
})
export class ProductTypeRadiobuttonComponent {
  @Input() variant: string = '';
  // TO DO: enum input (standard or special)
}
