import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.scss']
})
export class LightModeComponent implements OnInit {
    modeFromStore: string;

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.storeService.bhs.subscribe(
            (res) => {
                this.modeFromStore = res;
            }
        );
    }
}
