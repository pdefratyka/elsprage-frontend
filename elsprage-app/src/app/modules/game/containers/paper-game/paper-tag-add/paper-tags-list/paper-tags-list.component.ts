import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from 'src/app/modules/shared/models/tag';

@Component({
  selector: 'app-paper-tags-list',
  templateUrl: './paper-tags-list.component.html',
  styleUrls: ['./paper-tags-list.component.scss']
})
export class PaperTagsListComponent {
  @Input()
  tags: Tag[];
  @Output()
  tagRemove: EventEmitter<number> = new EventEmitter<number>();

  removeTag(tagId: number): void {
    this.tagRemove.emit(tagId);
  }
}
