import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CardModel} from "@shared/models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  constructor(private http: HttpClient) {
  }

  getCardInfo(name: string) {
    return this.http.get<{ card: CardModel }>(`visits/${name}`)
  }
}
