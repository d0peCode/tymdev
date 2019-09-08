import { Component, OnInit } from '@angular/core';
import { SelectedAppService } from '../../../services/selectedApp.service';

@Component({
    providers: [SelectedAppService],
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
    constructor(private selectedAppService: SelectedAppService) { }

    selected: number;

    firstClick(n) {
        this.selectedAppService.changeSelected(n);
        this.selected = this.selectedAppService.selectedApp;
    }

    ngOnInit() {}
}
