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
            description: 'two-house-text',
            bg: '../../../../assets/projects/th.png',
            live: true,
            git: false,
            link: {
                live: 'https://twohouse.pl'
            }
        },
        {
            name: 'ActiveYachtClub',
            date: '10.01.2019',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
            description: 'ayc-text',
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
            description: 'quickmargo-text',
            bg: '../../../../assets/projects/quickmargo2.png',
            live: true,
            git: false,
            link: {
                live: 'https://quickmargo.pl'
            }
        },
        {
            name: 'AdminPanel',
            date: '30.10.2018',
            icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
            description: 'adminpanel-text',
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
            description: 'screenrecorder-text',
            image: '../../../../assets/projects/screenrecorder.png',
            git: true,
            live: false,
            bg: '../../../../assets/projects/screenrecorder.png',
            link: {
                git: 'https://github.com/d0peCode/screenRecorder'
            }
        },
        {
            name: 'ColorReader',
            date: '10.02.2018',
            git: true,
            live: true,
            link: {
                live: 'http://colorchanger.tymdev.pl',
                git: 'https://github.com/d0peCode/colorReader'
            },
            description: 'colorreader-text',
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
