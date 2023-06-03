import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {
  transform(rating: number, totalStars: number = 5): string {
    const fullStars = Math.floor(rating);
    const partialStar = rating - fullStars;
    const emptyStars = totalStars - Math.ceil(rating);
    const starSymbols = '★☆';
    const fullStarStr = starSymbols[0].repeat(fullStars);
    const partialStarStr = partialStar > 0 ? starSymbols[1] : '';
    const emptyStarStr = starSymbols[1].repeat(emptyStars);
    return fullStarStr + partialStarStr + emptyStarStr;
  }
}
