import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})
export class LanguageNamePipe implements PipeTransform {

  private languageMap: { [key: string]: string } = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'hi': 'Hindi',
    'ja': 'Japanese',
    'tl': 'Tagalog',
    'ko': 'Korean',
    'bn': 'Bengali'
    // ... add other languages as needed
  };

  transform(value: string): string {
    return this.languageMap[value] || value;
  }

}
