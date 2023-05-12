import { Pipe, PipeTransform } from '@angular/core';
import { SynonymsService } from '../../core/services/helper/synonyms.service';

@Pipe({
  name: 'textWithSynonyms'
})
export class TextWithSynonymsPipe implements PipeTransform {

  transform(value: string): string {
    return SynonymsService.addSpaces(value);
  }

}
