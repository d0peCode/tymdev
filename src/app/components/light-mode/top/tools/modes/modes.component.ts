import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modes',
    templateUrl: './modes.component.html',
    styleUrls: ['./modes.component.scss']
})

export class ModesComponent implements OnInit {
    @Input() mode: boolean;
    constructor(private router: Router) { }

    ngOnInit() { }

    modeChanged() {
        if(this.mode) {
            this.router.navigate(['/dark']);
        } else {
            this.router.navigate(['/']);
        }
        console.log(this.mode);
    }
}
