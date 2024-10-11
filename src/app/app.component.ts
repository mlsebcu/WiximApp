import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { TabsPage } from "./tabs/tabs.page";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsPage, HeaderComponent],
})
export class AppComponent {
  constructor(private router: Router) {
    this.showSplash();
    this.initializeApp();

    // Preferences.clear();
  }

  async showSplash() {
    // Show the splash for an indefinite amount of time:
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000
    });
  }

  async initializeApp() {
    try {
      // Verificar si el usuario ya completó el onboarding
      const { value } = await Preferences.get({ key: 'onboardingComplete' });
      console.log('onboardingComplete value:', value); // <-- Asegúrate de que se está leyendo correctamente
  
      if (value === 'true') {
        // Si onboarding ya fue completado, redirigir a 'home'
        this.router.navigateByUrl('/home', { replaceUrl: true });
      } else {
        // Si no ha completado onboarding, redirigir a 'onboarding'
        this.router.navigateByUrl('/onboarding', { replaceUrl: true });
      }
    } catch (error) {
      console.error('Error al obtener preferencias:', error);
      this.router.navigateByUrl('/onboarding', { replaceUrl: true });
    }
  }
  
}