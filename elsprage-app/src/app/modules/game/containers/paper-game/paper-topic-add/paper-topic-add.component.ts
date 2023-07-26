import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameState, getTags, getTopics } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { Tag } from 'src/app/modules/shared/models/tag';
import { GamePageAction } from '../../../store/actions';
import { CreateTopicRequest } from 'src/app/modules/shared/models/requests/create-topic-request';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/modules/shared/models/topic';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';

@Component({
  selector: 'app-paper-topic-add',
  templateUrl: './paper-topic-add.component.html',
  styleUrls: ['./paper-topic-add.component.scss']
})
export class PaperTopicAddComponent implements OnInit {

  @ViewChild('tagSelect') tagSelect: ElementRef<HTMLInputElement>;;
  topicForm: FormGroup;
  selectedTagsIds: string[] = [];
  selectedTagsValues: string[] = [];
  tags: Tag[];
  topics$: Observable<Topic[]>;

  constructor(private readonly router: Router, private readonly formBuilder: FormBuilder,
    private gameStore: Store<GameState>, private toastService: ToastService) {
    this.gameStore.select(getTags).subscribe(tags => {
      this.tags = tags;
    });
    this.topics$ = this.gameStore.select(getTopics);
  }

  ngOnInit(): void {
    this.gameStore.dispatch(GamePageAction.getTags());
    this.gameStore.dispatch(GamePageAction.getTopics());
    this.initTopicForm();
  }

  cancelLearning(): void {
    this.router.navigate(['/games/paper']);
  }

  saveTopic(): void {
    const topicValue: string = this.topicForm.get('topic')?.value
    const topicRequest = {
      value: topicValue,
      tagsIds: this.selectedTagsIds
    } as CreateTopicRequest;
    this.gameStore.dispatch(GamePageAction.saveTopic({ topicRequest }));
  }

  selectTag(): void {
    const maxTagsLength = 3;
    const tag = this.tagSelect.nativeElement.value;
    if (!this.selectedTagsIds.includes(tag)) {
      if (this.selectedTagsIds.length >= maxTagsLength) {
        this.toastService.error("Only three tags are allowed");
      } else {
        this.selectedTagsIds.push(tag);
        this.selectedTagsValues.push(this.tags.filter(t => String(t.id) === tag)[0].value)
      }
    }
  }

  removeTopic(topicId: number): void {
    this.gameStore.dispatch(GamePageAction.deleteTopic({ topicId }));
  }

  private initTopicForm(): void {
    this.topicForm = this.formBuilder.group({
      topic: ['', [Validators.required]],
    });
  }
}
