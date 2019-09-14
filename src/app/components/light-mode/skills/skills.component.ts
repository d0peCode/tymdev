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
                alt: 'Responsive'
            },
            header: 'Responsywność',
            text: 'Każda strona i aplikacja, którą tworzę jest responsywna i dopasowuje się do każdego urządzenia.'
        },
        {
            image: {
                src:  '../../assets/icons/fe-be.png',
                alt: 'Frontend/Backend'
            },
            header: 'Frontend/Backend',
            text: 'W javascripcie znam zarówno technologie frontendowe jak i backendowe dzięki czemu jestem w stanie pracować nad wieloma rzeczami.'
        },
        {
            image: {
                src:  '../../assets/icons/seo.png',
                alt: 'Search engine optimization'
            },
            header: 'SEO',
            text: 'Dbam o semantykę HTMLa dzięki czemu aplikacje, które tworze są wstępnie przygotowane pod pozycjonowanie.'
        },
        {
            image: {
                src:  '../../assets/icons/seo.png',
                alt: 'Search engine optimization'
            },
            header: 'SEO1',
            text: 'Dbam o semantykę HTMLa dzięki czemu aplikacje, które tworze są wstępnie przygotowane pod pozycjonowanie.'
        },
        {
            image: {
                src:  '../../assets/icons/seo.png',
                alt: 'Search engine optimization'
            },
            header: 'SEO2',
            text: 'Dbam o semantykę HTMLa dzięki czemu aplikacje, które tworze są wstępnie przygotowane pod pozycjonowanie.'
        },
        {
            image: {
                src:  '../../assets/icons/seo.png',
                alt: 'Search engine optimization'
            },
            header: 'SEO3',
            text: 'Dbam o semantykę HTMLa dzięki czemu aplikacje, które tworze są wstępnie przygotowane pod pozycjonowanie.'
        }
    ];

    constructor() {}

    ngAfterViewInit() {
        this.mySwiper = new Swiper('.skills__body', {
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: 3
        });
    }

    previousSlide() {
        this.mySwiper.slidePrev();
    }
    nextSlide() {
        this.mySwiper.slideNext();
    }

    ngOnInit() {
    }

}
