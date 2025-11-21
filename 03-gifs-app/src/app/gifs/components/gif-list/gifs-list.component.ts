import { Component, input, Input } from '@angular/core';
import { GifListItemComponent } from './gifs-list-item/gifs-list-item.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
