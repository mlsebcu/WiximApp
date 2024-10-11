import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle,  IonCardSubtitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-plague',
  templateUrl: './card-plague.component.html',
  styleUrls: ['./card-plague.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class CardPlagueComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
