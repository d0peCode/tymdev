import { Component, OnInit, Input } from '@angular/core';
import {StoreService} from '../../../../../services/store.service';

@Component({
    selector: 'app-modes',
    templateUrl: './modes.component.html',
    styleUrls: ['./modes.component.scss'],
    providers: [StoreService]
})

export class ModesComponent implements OnInit {
    mode: boolean;
    modeFromStore: string;
    el = [];

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.el = this.storeService.el;
        this.modeFromStore = this.storeService.mode;
    }

    modeChanged() {
        console.log(this.mode);
        this.storeService.addEl();
        if (this.mode) {
            this.storeService.setMode('dark');
        } else {
            this.storeService.setMode('light');
        }
        console.log(this.modeFromStore);
    }
}
