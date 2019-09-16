import {BehaviorSubject} from 'rxjs';

export class StoreService {
    public mode = 'light';
    public bhs: BehaviorSubject<string>;

    constructor() {
        this.bhs = new BehaviorSubject('light');
    }

    setMode(newMode: string) {
        this.bhs.next(newMode);
    }
}
