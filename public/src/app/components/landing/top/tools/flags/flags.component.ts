import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  currentLang = this.translate.currentLang;
  setLang = lang => {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  ngOnInit() {
  }
}
