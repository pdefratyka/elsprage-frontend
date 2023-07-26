import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    let seconds = "" + (value - (minutes * 60));
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
}
