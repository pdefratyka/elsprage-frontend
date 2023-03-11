import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from 'src/app/modules/shared/models/language';
import { Packet } from 'src/app/modules/shared/models/packet';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-edit-packet-form',
  templateUrl: './edit-packet-form.component.html',
  styleUrls: ['./edit-packet-form.component.scss'],
})
export class EditPacketFormComponent implements OnInit, OnChanges {
  @Input()
  languages: Language[];
  @Input()
  wordsToAdd: Word[];
  @Input()
  addedWords: Word[];
  @Input()
  numberOfWords: number;
  @Input()
  packet: Packet;
  @Output()
  packetCreate: EventEmitter<PacketRequest> = new EventEmitter<PacketRequest>();
  @Output()
  pageSelection: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  wordFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  wordToPacketAddition: EventEmitter<Word> = new EventEmitter<Word>();
  @Output()
  wordRemoveFromPacket: EventEmitter<Word> = new EventEmitter<Word>();
  @ViewChild('valueLanguage') valueLanguage: ElementRef<HTMLSelectElement>;
  @ViewChild('translationLanguage')
  translationLanguage: ElementRef<HTMLSelectElement>;
  packetForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['packet'] && this.packetForm) {
      this.packetForm
        .get('name')
        .setValue(changes['packet'].currentValue['name']);
    }
  }

  ngOnInit(): void {
    this.initPacketForm();
  }

  createPacket(): void {
    this.packetCreate.emit(this.getPacketRequest());
  }

  addWord(word: Word): void {
    this.wordToPacketAddition.emit(word);
  }

  removeWord(word: Word): void {
    this.wordRemoveFromPacket.emit(word);
  }

  selectPage(page: number): void {
    this.pageSelection.emit(page);
  }

  getWordsByQuery(query: string): void {
    this.wordFilter.emit(query);
  }

  private initPacketForm(): void {
    this.packetForm = this.formBuilder.group({
      name: [this.packet.name, [Validators.required]],
      valueLanguage: [this.languages[0], Validators.required],
      translationLanguage: ['', Validators.required],
    });
  }

  private getPacketRequest(): PacketRequest {
    return {
      id: this.packet.id,
      name: this.packetForm.get('name').value,
      valueLanguageId:
        this.languages[Number(this.valueLanguage.nativeElement.value)].id,
      translationLanguageId:
        this.languages[Number(this.translationLanguage.nativeElement.value)].id,
      wordsIds: this.addedWords.map((w) => w.id),
    } as PacketRequest;
  }
}
