import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GameState, getTags } from '../../../store/reducers';
import { GamePageAction } from '../../../store/actions';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/modules/shared/models/tag';

@Component({
  selector: 'app-paper-tag-add',
  templateUrl: './paper-tag-add.component.html',
  styleUrls: ['./paper-tag-add.component.scss']
})
export class PaperTagAddComponent {
  tagForm: FormGroup;
  tags$: Observable<Tag[]>;

  constructor(private readonly router: Router, private readonly formBuilder: FormBuilder,
    private gameStore: Store<GameState>) {
    this.tags$ = this.gameStore.select(getTags);
  }

  ngOnInit(): void {
    this.gameStore.dispatch(GamePageAction.getTags());
    this.initTopicForm();
  }

  cancelLearning(): void {
    this.router.navigate(['/games/paper']);
  }

  saveTag(): void {
    const tag = this.tagForm.get('tag')?.value;
    this.gameStore.dispatch(GamePageAction.saveTag({ tag }));
  }

  removeTag(tagId: number): void {
    this.gameStore.dispatch(GamePageAction.deleteTag({ tagId }));
  }

  private initTopicForm(): void {
    this.tagForm = this.formBuilder.group({
      tag: ['', [Validators.required]],
    });
  }
}
