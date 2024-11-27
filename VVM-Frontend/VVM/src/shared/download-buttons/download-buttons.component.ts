import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-buttons',
  standalone: true,
  imports: [],
  templateUrl: './download-buttons.component.html',
  styleUrl: './download-buttons.component.scss'
})
export class DownloadButtonsComponent {
  @Input() isClickable = true;
}
