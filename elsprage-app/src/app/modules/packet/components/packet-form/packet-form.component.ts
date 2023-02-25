import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from 'src/app/modules/shared/models/language';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-packet-form',
  templateUrl: './packet-form.component.html',
  styleUrls: ['./packet-form.component.scss'],
})
export class PacketFormComponent implements OnInit {
  @Input()
  languages: Language[];
  @Input()
  wordsToAdd: Word[];
  @Input()
  numberOfWords: number;
  @Output()
  packetCreate: EventEmitter<PacketRequest> = new EventEmitter<PacketRequest>();
  @Output()
  pageSelection: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  wordFilter: EventEmitter<string> = new EventEmitter<string>();
  packetForm: FormGroup;
  addedWords: Word[] = [];

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initPacketForm();
  }

  createPacket(): void {
    this.packetCreate.emit(this.getPacketRequest());
  }

  addWord(word: Word): void {
    const isWordAlreadyAdded = this.addedWords.includes(word);
    if (!isWordAlreadyAdded) {
      this.addedWords.push(word);
    }
  }

  removeWord(word: Word): void {
    this.addedWords = this.addedWords.filter((w) => w.id !== word.id);
  }

  selectPage(page: number): void {
    this.pageSelection.emit(page);
  }

  getWordsByQuery(query: string): void {
    this.wordFilter.emit(query);
  }

  private initPacketForm(): void {
    this.packetForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      valueLanguage: ['', Validators.required],
      translationLanguage: ['', Validators.required],
    });
  }

  private getPacketRequest(): PacketRequest {
    return {
      name: this.packetForm.get('name').value,
      valueLanguageId:
        this.languages[this.packetForm.get('valueLanguage')?.value].id,
      translationLanguageId:
        this.languages[this.packetForm.get('translationLanguage')?.value].id,
      wordsIds: this.addedWords.map((w) => w.id),
    } as PacketRequest;
  }
}
