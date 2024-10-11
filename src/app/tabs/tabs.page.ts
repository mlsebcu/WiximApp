import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonLabel,
  IonTab,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  bugOutline,
  scaleOutline,
  mapOutline,
  settingsOutline, scanOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTab,
    IonLabel,
    IonFabButton,
    IonFab,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({homeOutline,bugOutline,mapOutline,settingsOutline,scaleOutline, scanOutline});
  }

  ngOnInit() {}
}
