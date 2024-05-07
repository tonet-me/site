import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {CardModel} from "@shared/models/card.model";
import {AsyncPipe, NgIf} from "@angular/common";
import {GetImageUrlPipe} from "@shared/pipes/get-image-url.pipe";
import {QRCodeModule} from "angularx-qrcode";
import {SocialMediaNamePipe} from "@shared/pipes/social-media-name.pipe";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    GetImageUrlPipe,
    QRCodeModule,
    SocialMediaNamePipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  cardInfo$!: Observable<CardModel>
  protected readonly window = (typeof window !== 'undefined')  ? window: undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.cardInfo$ = this.activatedRoute.data.pipe(map((res) => res['cardInfo']))
  }


  onShareLink(title: string) {
      navigator.share({
        title,
        text: 'Tonet - Craft Your Unique Digital Card and Share It with the World',
        url: window.location.href
      })
  }

}
