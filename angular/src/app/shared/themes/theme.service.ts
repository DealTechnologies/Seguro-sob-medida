import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThem = new BehaviorSubject('primary');

    constructor() {
    }

    public getActiveTheme(): Observable<any> {
        return this.activeThem.asObservable();
    }

    public setActiveThem(name): void {
        this.activeThem.next(name);
    }
}
