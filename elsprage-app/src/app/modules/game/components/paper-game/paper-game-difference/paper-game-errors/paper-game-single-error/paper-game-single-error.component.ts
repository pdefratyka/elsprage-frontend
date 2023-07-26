import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaperError } from 'src/app/modules/shared/models/paperError';

@Component({
  selector: 'app-paper-game-single-error',
  templateUrl: './paper-game-single-error.component.html',
  styleUrls: ['./paper-game-single-error.component.scss']
})
export class PaperGameSingleErrorComponent implements OnInit, OnChanges {

  @Input()
  paperError: PaperError;
  @Input()
  isNewPaperError: boolean;
  @Output()
  paperGameErrorSave: EventEmitter<PaperError> = new EventEmitter<PaperError>();
  @Output()
  paperGameErrorRemove: EventEmitter<PaperError> = new EventEmitter<PaperError>();
  paperErrorForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initPaperErrorForm();
  }


  ngOnInit(): void {
    this.initPaperErrorForm();
  }

  savePaperGameError(): void {
    this.paperGameErrorSave.emit(this.getPaperGameErrorFromForm());
  }

  removeError(): void {
    this.paperGameErrorRemove.emit(this.paperError);
  }

  private initPaperErrorForm(): void {
    let errorLevel = this.paperError.errorLevel;
    if (this.isNewPaperError) {
      errorLevel = "MEDIUM"
    }
    this.paperErrorForm = this.formBuilder.group({
      wrong: [{ value: this.paperError.wrong, disabled: !this.isNewPaperError }],
      corrected: [{ value: this.paperError.corrected, disabled: !this.isNewPaperError }],
      explanation: [{ value: this.paperError.explanation, disabled: !this.isNewPaperError }],
      errorLevel: [{ value: errorLevel, disabled: !this.isNewPaperError }]
    });
  }

  private getPaperGameErrorFromForm(): PaperError {
    return {
      wrong: this.paperErrorForm.get('wrong').value,
      corrected: this.paperErrorForm.get('corrected').value,
      explanation: this.paperErrorForm.get('explanation').value,
      errorLevel: this.paperErrorForm.get('errorLevel').value,
    } as PaperError;
  }
}
