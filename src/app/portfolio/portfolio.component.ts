import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    mySwiper: Swiper;

    slides = [
        {
            name: 'QuickMargo',
            image: 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564667988/th.jpg',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/node.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/express.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/puppeteer.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/electron.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/ionic.jpg', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679585/angular.png'],
            description: 'Mój najbardziej skomplikowany projekt. Jest to bot w pełni automatyzujący największą polską dynamiczną przeglądarkową grę RPG. Bot automatyzuje wszystkie obszary gry oraz pozwala się zarządzać z poziomu telefonu. Składa się z trzech aplikacji - mobilnej, desktopowej i webowej oraz backendu, który umożliwia współpracę między nimi. Do stworzenia projektu skorzystałem z takich technologii jak NodeJS, Express, Socket.io, Vue2JS, Electron, Ionic, Angular.'
        },
        {
            name: 'TwoHouse',
            image: '',
            logo: '',
            description: 'Aplikacja internetowa biura nieruchomości razem z własnym CMS.'
        },
        {
            name: 'ActiveYachtClub',
            image: ''
        },
        {
            name: 'AdminPanel',
            image: ''
        },
        {
            name: 'ColorReader',
            image: ''
        },
        {
            name: 'ScreenRecorder',
            image: ''
        },
        {
            name: 'NodeBoilerplate',
            image: ''
        }
    ];

    constructor() {}

    ngAfterViewInit() {
        this.mySwiper = new Swiper('.nav', {
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: 1
        });

        this.mySwiper.on('touchStart', () => {
            this.touchService.triggerTouchStart();
        });
        this.mySwiper.on('touchEnd', () => {
            this.touchService.triggerTouchStop();
            this.selectedAppService.changeSelected(3);
        });
    }

    ngOnInit() {
    }

}
