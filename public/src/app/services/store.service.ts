import {BehaviorSubject} from 'rxjs';

export class StoreService {
    public mode = 'light';
    public languageChanged = false;
    public bhs: BehaviorSubject<string>;
    public bhsLang: BehaviorSubject<boolean>;

    constructor() {
        this.bhs = new BehaviorSubject('light');
        this.bhsLang = new BehaviorSubject(false);
    }

    setMode(newMode: string) {
        this.bhs.next(newMode);
    }
    setLangChanged(val: boolean) {
        this.bhsLang.next(val);
    }

}
