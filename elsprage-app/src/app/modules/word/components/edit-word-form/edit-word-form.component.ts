import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-edit-word-form',
  templateUrl: './edit-word-form.component.html',
  styleUrls: ['./edit-word-form.component.scss'],
})
export class EditWordFormComponent implements OnInit, OnChanges {
  @Input()
  languages: Language[];
  @Input()
  word: Word;
  @Output()
  wordSave: EventEmitter<Word> = new EventEmitter<Word>();
  @ViewChild('valueInput') valueInput: ElementRef<HTMLInputElement>;
  @ViewChild('translationInput') translationInput: ElementRef<HTMLInputElement>;
  wordForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initWordForm();
  }

  saveWord(): void {
    this.wordSave.emit(this.getWordFromForm());
  }

  ngOnChanges(): void {
    this.setValuesOnForm();
  }

  onGermanKeySelect(
    key: string,
    formControl: AbstractControl,
    isValueInput: boolean
  ): void {
    formControl.setValue(formControl.value + key);
    if (isValueInput) {
      this.valueInput.nativeElement.focus();
    } else {
      this.translationInput.nativeElement.focus();
    }
  }

  private initWordForm(): void {
    this.wordForm = this.formBuilder.group({
      value: [this.word.value, [Validators.required]],
      translation: [this.word.translation, Validators.required],
      valueLanguage: [this.word.valueLanguage, Validators.required],
      translationLanguage: [this.word.translationLanguage, Validators.required],
      image: [this.word.image],
      sound: [this.word.sound],
      example: [this.word.example],
      explanation:[this.word.explanation]
    });
  }

  private getWordFromForm(): Word {
    return {
      id: this.word.id,
      userId: this.word.userId,
      imageDataEncoded: this.word.imageDataEncoded,
      value: this.wordForm.get('value')?.value,
      translation: this.wordForm.get('translation')?.value,
      valueLanguage: this.languages[this.wordForm.get('valueLanguage')?.value],
      translationLanguage:
        this.languages[this.wordForm.get('translationLanguage')?.value],
      image: this.wordForm.get('image')?.value,
      sound: this.wordForm.get('sound')?.value,
      example: this.wordForm.get('example')?.value,
      explanation: this.wordForm.get('explanation')?.value,
    } as Word;
  }

  private setValuesOnForm() {
    if (
      this.word &&
      this.languages &&
      this.word.valueLanguage &&
      this.wordForm
    ) {
      this.wordForm.get('value').setValue(this.word.value);
      this.wordForm.get('translation').setValue(this.word.translation);
      this.wordForm.get('image').setValue(this.word.image);
      this.wordForm.get('sound').setValue(this.word.sound);
      this.wordForm.get('example').setValue(this.word.example);
      this.wordForm.get('explanation').setValue(this.word.explanation);
      this.wordForm
        .get('valueLanguage')
        .setValue(
          this.languages.findIndex((l) => l.id === this.word.valueLanguage.id)
        );
      this.wordForm
        .get('translationLanguage')
        .setValue(
          this.languages.findIndex(
            (l) => l.id === this.word.translationLanguage.id
          )
        );
    }
  }
}
