import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-barmenu',
  templateUrl: './barmenu.component.html',
  styleUrls: ['./barmenu.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class BarmenuComponent {

  constructor() {
    addIcons({ library, playCircle, radio, search });
  }
}
