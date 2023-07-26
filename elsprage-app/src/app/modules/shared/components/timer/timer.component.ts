import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input()
  timeInSeconds: number;
  @Output()
  timeUp: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.timeInSeconds > 0) {
      this.startTimer()
    }
  }

  startTimer(): void {
    let interval = setInterval(() => {
      this.decreaseTime();
      if (this.isTimeUp()) {
        this.timeUp.emit(true);
        clearInterval(interval);
      }
    }, 1000);
  }

  isTimeUp(): boolean {
    return this.timeInSeconds <= 0;
  }

  private decreaseTime(): void {
    this.timeInSeconds = this.timeInSeconds - 1;
  }
}
