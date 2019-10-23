import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    mySwiper: Swiper;

    slides = [
        {
            image: {
                src:  '../../assets/icons/laptop.png',
                alt: 'responsiveness'
            },
            header: 'responsiveness',
            text: 'responsiveness-text'
        },
        {
            image: {
                src:  '../../assets/icons/fe-be.png',
                alt: 'Frontend/Backend'
            },
            header: 'Frontend/Backend',
            text: 'fe-be-text'
        },
        {
            image: {
                src:  '../../assets/icons/seo.png',
                alt: 'Search engine optimization'
            },
            header: 'SEO',
            text: 'seo-text'
        },
        {
            image: {
                src:  '../../assets/icons/fe-be.png',
                alt: 'Javascript'
            },
            header: 'Javascript',
            text: 'ES6+, Vue2JS, AngularJS, Angular 2+, Electron, Ionic, NodeJS, ExpressJS, Jest, Puppeteer, Selenium, Quasar...'
        },
        {
            image: {
                src:  '../../assets/icons/laptop.png',
                alt: 'CSS'
            },
            header: 'CSS',
            text: 'CSS3, SCSS, BEM, Grid, Flexbox, Bootstrap 3 & 4 :('
        }
    ];

    slidesPerView = 3;

    constructor() {}

    ngAfterViewInit() {
        this.mySwiper = new Swiper('.skills__body', {
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: this.slidesPerView
        });
    }

    previousSlide() {
        this.mySwiper.slidePrev();
    }
    nextSlide() {
        this.mySwiper.slideNext();
    }
    handleSlidesAmount() {
        if(window.innerWidth < 1000) {
            this.slidesPerView = 2;
        }
        if(window.innerWidth < 600) {
            this.slidesPerView = 1;
        }
        if(this.mySwiper) this.mySwiper.reInit();
    }

    ngOnInit() {
        this.handleSlidesAmount();
        window.addEventListener('resize', this.handleSlidesAmount);
    }

}
