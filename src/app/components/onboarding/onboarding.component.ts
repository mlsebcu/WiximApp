import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Slide } from 'src/app/shared/interfaces/slide.interface';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { NgIf, NgForOf } from '@angular/common';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, NgForOf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardingComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  slides: Slide[] = [
    {
      title: 'Detecta plagas con la cámara de tu teléfono o sube una imagen.',
      description: 'Utiliza la cámara de tu dispositivo o sube una imagen para identificar plagas en tus cultivos.',
      image: 'assets/onboarding/slide1.svg'
    },
    {
      title: 'Consulta el historial de detecciones con información sobre plagas y ubicación.',
      description: 'Revisa el historial para mantener un control sobre las plagas en tus cultivos.',
      image: 'assets/onboarding/slide2.svg'
    },
    {
      title: 'Mapea las detecciones y obtén detalles por ubicación.',
      description: 'Obtén un mapa interactivo con las ubicaciones de las plagas detectadas.',
      image: 'assets/onboarding/slide3.svg'
    }
  ];

  showStartButton = false;

  swiperParams = {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: { clickable: true },
    autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
  createElements: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  };

  constructor(private router: Router) {}

  async ngOnInit() {
    try {
      const { value } = await Preferences.get({ key: 'onboardingComplete' });
      if (value === 'true' && this.router.url !== '/home') {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    } catch (error) {
      console.error('Error al obtener preferencias:', error);
    }
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperRef?.nativeElement;
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams);
      swiperEl.initialize();
    }
  }

  async startApp() {
    try {
      await Preferences.set({ key: 'onboardingComplete', value: 'true' });
      console.log('onboardingComplete guardado como true'); // <-- Verifica que se guarda correctamente
      this.router.navigate(['/home'], { replaceUrl: true });
    } catch (error) {
      console.error('Error al navegar o guardar preferencias:', error);
    }
  }
  

  onSlideChange(swiper: any) {
    this.showStartButton = swiper.isEnd;
  }
}