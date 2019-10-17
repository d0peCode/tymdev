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
            name: 'TwoHouse',
            date: '15.10.2018',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
            description: 'Responsywna aplikacja internetowa biura nieruchomości z Wilanowa. Została stworzona w frameworku Vue2JS. Backend w formie REST API napisany jest w PHP, kod jest zorientowany obiektowo, do połączenia z bazą danych MySQL użyłem biblioteki PDO. Backend posiada takie opcje jak dodawanie, edycja, usuwanie nieruchomości, zarządzanie typami, cechami oraz lokalizacjami nieruchomości. Aplikacja posiada autorski CMS, który korzysta z jej endpointów.',
            bg: '../../../../assets/projects/th.png',
            live: true,
            git: false,
            link: {
                live: 'https://two-house.com/'
            }
        },
        {
            name: 'ActiveYachtClub',
            date: '10.01.2019',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
            description: 'Responsywna aplikacja internetowa poświęcona czarterowi eksuzywnych jachtów na Majorce. Została stworzona w frameworku Vue2JS. Backend w formie REST API napisany jest w PHP, kod jest zorientowany obiektowo, do połączenia z bazą danych MySQL użyłem biblioteki PDO.',
            bg: '../../../../assets/projects/ayc.png',
            live: true,
            git: false,
            link: {
                live: 'http://www.activeyachtclub.com'
            }
        },
        {
            name: 'QuickMargo',
            date: '01.09.2019',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/node.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/express.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/puppeteer.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/socket.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/atom.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/ionic.jpg', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679585/angular.png'],
            description: 'Mój najbardziej skomplikowany projekt. Jest to bot w pełni automatyzujący największą polską dynamiczną przeglądarkową grę RPG. Bot automatyzuje wszystkie obszary gry oraz pozwala się zarządzać z poziomu telefonu. Składa się z trzech aplikacji - mobilnej, desktopowej i webowej oraz backendu, który umożliwia współpracę między nimi. Do stworzenia projektu skorzystałem z takich technologii jak NodeJS, Express, MongoDB, Puppeteer, Socket.io, Vue2JS, Electron, Ionic, Angular.',
            bg: '../../../../assets/projects/quickmargo2.png',
            live: true,
            git: false,
            link: {
                live: 'https://two-house.com/'
            }
        },
        {
            name: 'AdminPanel',
            date: '30.10.2018',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
            description: 'Admin panel jest to prosty autorski CMS służący do zarządzania treściami w wykonanych przeze mnie aplikacjach. Posiada różne najbardziej przydatne funkcje jak dodawanie, usuwanie, modyfikowanie artykułów widocznych w aplikacjach, bazy klientów, wysyłanie newsletterów itd. Do jego stworzenia wykorzystałem Vue2JS, PHP',
            live: true,
            bg: '../../../../assets/projects/adminpanel.png',
            git: false,
            link: {
                live: 'http://admin.tymdev.pl/'
            },
        },
        {
            name: 'ScreenRecorder',
            date: '05.09.2019',
            image: ''
        },
        {
            name: 'ColorReader',
            bg: '../../../../assets/projects/colorchanger.png',
        }
    ];

    constructor() {}

    ngAfterViewInit() {
        this.mySwiper = new Swiper('.nav-light', {
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: 1
        });
    }

    nextSlide() {
        this.mySwiper.slideNext();
    }

    ngOnInit() {
    }

}
