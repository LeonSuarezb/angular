import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>();
}
