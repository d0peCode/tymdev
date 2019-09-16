import { Component, OnInit, Input } from '@angular/core';
import {StoreService} from '../../../../../services/store.service';

@Component({
    selector: 'app-modes',
    templateUrl: './modes.component.html',
    styleUrls: ['./modes.component.scss'],
    providers: []
})

export class ModesComponent implements OnInit {
    mode: boolean;
    modeFromStore: string;

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.storeService.bhs.subscribe(
            (res) => {
                this.modeFromStore = res;
            }
        );
    }

    modeChanged() {
        if (this.mode) {
            this.storeService.setMode('dark');
        } else {
            this.storeService.setMode('light');
        }
    }
}
