import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent {
  @Input()
  keyValue: string;
  @Output()
  selectKey: EventEmitter<string> = new EventEmitter<string>();

  emitSelectKey(): void {
    console.log("Emit");
    this.selectKey.emit(this.keyValue);
  }
}
