import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcRating',
})
export class CalcRatingPipe implements PipeTransform {
  transform(votes: { likes: string[]; unlikes: string[] }): string {
    const likes = votes.likes.length;
    const unlikes = votes.unlikes.length;
    if (likes > 0) {
      const total = likes + unlikes;
      return String(((likes / total) * 100) / 20).slice(0, 3);
    } else {
      return '0';
    }
  }
}
