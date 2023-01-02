import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-german-keyboard',
  templateUrl: './german-keyboard.component.html',
  styleUrls: ['./german-keyboard.component.scss']
})
export class GermanKeyboardComponent {
  @Output()
  selectKey: EventEmitter<string> = new EventEmitter<string>();
  keyValues = ['ä', 'ö', 'ü', 'ß'];
  isLowerCase = true;

  shiftOnAction(): void {
    if (this.isLowerCase) {
      this.keyValues = this.keyValues.map(k => {
        if (k === 'ß') {
          return 'ß';
        }
        return k.toUpperCase();
      });
      this.isLowerCase = false;
    } else {
      this.keyValues = this.keyValues.map(k => k.toLowerCase());
      this.isLowerCase = true;
    }
  }

  germanKeyOnAction(key: string) {
    this.selectKey.emit(key);
  }
}
