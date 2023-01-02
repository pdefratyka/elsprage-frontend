import { AfterViewInit, Component, Input } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-single-word',
  templateUrl: './single-word.component.html',
  styleUrls: ['./single-word.component.scss']
})
export class SingleWordComponent {
  @Input()
  word: Word;

  constructor() {
  }

}
