import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    scrollToElement(el): void {
        const element = document.querySelector(`#${el}`);
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    ngOnInit() { }
}
