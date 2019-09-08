import { Component, OnInit, HostListener } from '@angular/core';
import {TouchService} from "../../../services/touch.service";

@Component({
    selector: 'app-follower',
    templateUrl: './follower.component.html',
    styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
    topPos: string;
    leftPos: string;
    holding: boolean;

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e) {
        this.topPos = e.clientY + 'px';
        this.leftPos = e.clientX + 'px';
    }

    constructor(private touchService: TouchService) {
        this.touchService.touch$.subscribe(e => this.holding = e);
    }

    ngOnInit() {
    }

}
