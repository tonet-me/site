import {ResolveFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CardInfoService} from "@shared/service/card-info.service";
import {CardModel} from "@shared/models/card.model";
import {catchError, map, throwError} from "rxjs";

export const cardInfoResolver: ResolveFn<CardModel> = (route, state) => {
  const cardInfoService = inject(CardInfoService)
  const router = inject(Router)
  return cardInfoService.getCardInfo(route.params['name'])
    .pipe(
      map((res) => res.card),
      catchError((err) => {
        router.navigate(['/404']).then()
        return throwError(() => err);
      })
  );
};
