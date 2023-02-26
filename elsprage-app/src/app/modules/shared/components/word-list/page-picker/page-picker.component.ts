import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-page-picker',
  templateUrl: './page-picker.component.html',
  styleUrls: ['./page-picker.component.scss'],
})
export class PagePickerComponent implements OnInit, OnChanges {
  @Input()
  numberOfWords: number;
  @Output()
  pageSelection: EventEmitter<number> = new EventEmitter<number>();
  selectedPage: number = 0;
  pages: number[];

  ngOnInit(): void {
    this.setPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setPages();
  }

  counter() {
    let pages = this.numberOfPages();
    if (pages > 5) {
      pages = 5;
    }
    return new Array(pages);
  }

  numberOfPages(): number {
    return Math.ceil(this.numberOfWords / 20);
  }

  selectPage(page: number): void {
    this.selectedPage = page;
    this.setPages();
    this.pageSelection.emit(page);
  }

  setPages(): void {
    let size = this.numberOfPages();
    if (size <= 5) {
      this.pages = [];
      for (let i = 0; i < size; i++) {
        this.pages.push(i);
      }
    } else {
      if (this.selectedPage == 0) {
        this.pages = [
          this.selectedPage,
          this.selectedPage + 1,
          this.selectedPage + 2,
          this.selectedPage + 3,
          size - 1,
        ];
      } else if (this.selectedPage == 1) {
        this.pages = [
          this.selectedPage - 1,
          this.selectedPage,
          this.selectedPage + 1,
          this.selectedPage + 2,
          size - 1,
        ];
      } else if (this.selectedPage == 2) {
        this.pages = [
          this.selectedPage - 2,
          this.selectedPage - 1,
          this.selectedPage,
          this.selectedPage + 1,
          size - 1,
        ];
      } else if (this.selectedPage === size - 1) {
        this.pages = [
          0,
          this.selectedPage - 3,
          this.selectedPage - 2,
          this.selectedPage - 1,
          this.selectedPage,
        ];
      } else if (this.selectedPage === size - 2) {
        this.pages = [
          0,
          this.selectedPage - 2,
          this.selectedPage - 1,
          this.selectedPage,
          size - 1,
        ];
      } else {
        this.pages = [
          0,
          this.selectedPage - 1,
          this.selectedPage,
          this.selectedPage + 1,
          size - 1,
        ];
      }
    }
  }
}
