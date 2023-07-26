import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PaperError } from 'src/app/modules/shared/models/paperError';

@Component({
  selector: 'app-paper-game-errors',
  templateUrl: './paper-game-errors.component.html',
  styleUrls: ['./paper-game-errors.component.scss']
})
export class PaperGameErrorsComponent {
  @Input()
  paperErrors: PaperError[];
  errorToAdd: PaperError = {} as PaperError;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  addPaperGameError(paperError: PaperError): void {
    this.paperErrors.push(paperError);
    this.resetErrorToAdd();
    this.changeDetectorRef.detectChanges();
  }

  removePaperGameError(paperError: PaperError): void {
    this.paperErrors = this.paperErrors.filter(e => !(e.wrong === paperError.wrong && e.corrected === paperError.corrected));
    this.changeDetectorRef.detectChanges();
  }

  private resetErrorToAdd(): void {
    this.errorToAdd = null;
    this.errorToAdd = {} as PaperError;
    this.errorToAdd.corrected = '';
    this.errorToAdd.wrong = '';
    this.errorToAdd.explanation = '';
    this.errorToAdd.errorLevel = '';
  }
}
