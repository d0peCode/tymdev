import {Injectable} from '@angular/core';
import {fromEvent, Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TouchService {
    private _manualControl$: Subject<boolean>;

    constructor() {
        this._manualControl$ = new Subject();
        fromEvent(document, 'mousedown').subscribe(() => this.triggerTouchStart());
        fromEvent(document, 'mouseup').subscribe(() => this.triggerTouchStop());
    }

    triggerTouchStart(): void {
        this._manualControl$.next(true);
    }

    triggerTouchStop(): void {
        this._manualControl$.next(false);
    }

    get touch$(): Observable<boolean> {
        return this._manualControl$.asObservable();
    }
}
