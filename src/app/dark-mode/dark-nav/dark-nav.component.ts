import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import Swiper from 'swiper';
import {TouchService} from '../../services/touch.service';
import {SelectedAppService} from '../../services/selectedApp.service';

@Component({
    providers: [SelectedAppService],
    selector: 'app-nav',
    templateUrl: './dark-nav.component.html',
    styleUrls: [ './dark-nav.component.scss' ]
})
export class DarkNavComponent implements AfterViewInit, OnChanges, OnInit {
    mySwiper: Swiper;

    slides = [
        'InGameTrade',
        'TwoHouse',
        'ActiveYachtClub',
        'QuickMargo',
        'StaszekSelekt',
        'SelectedEvents',
        'AdminPanel',
        'ColorReader'
    ];

    constructor(private touchService: TouchService, private selectedAppService: SelectedAppService) {}

    ngAfterViewInit() {
        this.mySwiper = new Swiper('.dark-nav', {
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: 3,
            spaceBetween: 50
        });

        this.mySwiper.on('touchStart', () => {
            this.touchService.triggerTouchStart();
        });
        this.mySwiper.on('touchEnd', () => {
            this.touchService.triggerTouchStop();
            this.selectedAppService.changeSelected(3);
        });
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    ngOnInit() {
        setTimeout(() => {
            alert(this.mySwiper.activeIndex);
        }, 4000);
    }
}
