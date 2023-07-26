import { Component, Input } from '@angular/core';
import { PaperError } from 'src/app/modules/shared/models/paperError';

@Component({
  selector: 'app-paper-error-details',
  templateUrl: './paper-error-details.component.html',
  styleUrls: ['./paper-error-details.component.scss']
})
export class PaperErrorDetailsComponent {
  @Input()
  paperError: PaperError;
}
