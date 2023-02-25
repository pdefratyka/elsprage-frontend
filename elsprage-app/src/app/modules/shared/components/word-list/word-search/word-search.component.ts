import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.scss'],
})
export class WordSearchComponent {
  @Output()
  wordFilter: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup;
  destroy$ = new Subject();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: [''],
    });

    this.searchForm.controls['query'].valueChanges
      .pipe(debounceTime(1000), takeUntil(this.destroy$))
      .subscribe(() => {
        this.emitFilter();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  emitFilter(): void {
    this.wordFilter.emit(this.searchForm.controls['query'].value);
  }
}
