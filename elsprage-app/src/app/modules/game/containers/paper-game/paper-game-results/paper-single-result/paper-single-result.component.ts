import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';

@Component({
  selector: 'app-paper-single-result',
  templateUrl: './paper-single-result.component.html',
  styleUrls: ['./paper-single-result.component.scss']
})
export class PaperSingleResultComponent {
  @Input()
  paperResult: PaperResult;

  constructor(private readonly router: Router) {

  }

  navigateToDetails(): void {
    this.router.navigate(['/games/paper/results/' + this.paperResult.id]);
  }
}
