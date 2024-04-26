import { Component } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-c404',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './c404.component.html',
  styleUrl: './c404.component.scss'
})
export class C404Component {

}
