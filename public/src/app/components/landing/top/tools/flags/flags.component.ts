import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StoreService} from '../../../../../services/store.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {
  constructor(private translate: TranslateService, private storeService: StoreService) { }

  langChanged = false;
  currentLang = this.translate.currentLang;
  setLang = lang => {
    this.translate.use(lang);
    this.currentLang = lang;
    this.storeService.setLangChanged(true);
  }

  ngOnInit() {
    this.storeService.bhsLang.subscribe(
      (res) => {
        this.langChanged = false;
      }
    );
  }
}
