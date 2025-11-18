import { Component, input, Input } from '@angular/core';
import { GifListItemComponent } from './gifs-list-item/gifs-list-item.component';

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifListComponent {
  imagesList = input.required<string[]>();
}
