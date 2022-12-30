import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent implements OnInit {
  @Input()
  languages: Language[];
  @Output()
  wordSave: EventEmitter<Word> = new EventEmitter<Word>();
  wordForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initWordForm();
  }

  saveWord(): void {
    console.log("save Word: " + this.getWordFromForm());
    this.wordSave.emit(this.getWordFromForm());
  }

  private initWordForm(): void {
    this.wordForm = this.formBuilder.group({
      value: ['', [Validators.required]],
      translation: ['', Validators.required],
      valueLanguage: ['', Validators.required],
      translationLanguage: ['', Validators.required],
      image: [''],
      sound: [''],
      example: [''],
    });
  }

  private getWordFromForm(): Word {
    return {
      value: this.wordForm.get('value')?.value,
      translation: this.wordForm.get('translation')?.value,
      valueLanguage: this.languages[this.wordForm.get('valueLanguage')?.value],
      translationLanguage: this.languages[this.wordForm.get('translationLanguage')?.value],
      image: this.wordForm.get('image')?.value,
      sound: this.wordForm.get('sound')?.value,
      example: this.wordForm.get('example')?.value
    } as Word;
  }
}
