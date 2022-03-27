import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, mergeMap, throwError, timer } from 'rxjs';
import { TableData } from '../model/table.model';

@Injectable({
    providedIn: 'root'
})
export class MockService {

    constructor(
        private http: HttpClient
    ) { }

    public getData$() {
        const randomBoolean = () => Math.random() >= 0.5; // randomBoolean will return true or false with 50% chance
        const errorObservable = throwError(() => new Error('Could not load data!'));
        return randomBoolean() ?
            this.http.get<TableData[]>('assets/data.json').pipe(delay(2000)) :
            errorObservable.pipe(
                // We need to delay throwing error as well
                catchError(err => timer(2000).pipe(
                    mergeMap(t => throwError(() => new Error(err)))))
            )
    }
}