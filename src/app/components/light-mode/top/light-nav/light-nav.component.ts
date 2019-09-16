import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-light-nav',
    templateUrl: './light-nav.component.html',
    styleUrls: ['./light-nav.component.scss']
})
export class LightNavComponent implements OnInit {

    constructor() { }

    scrollToElement(el): void {
        const element = document.querySelector(`#${el}`);
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    ngOnInit() {
    }

}
