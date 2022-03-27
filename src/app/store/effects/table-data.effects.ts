import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, tap } from 'rxjs';

import * as TableDataActions from '../actions/table-data.actions';
import * as SelectedInputActions from '../actions/selected-input.actions';
import { MockService } from 'src/app/provider/mock.service';

@Injectable()
export class TableDataEffect {
    constructor(
        private action$: Actions,
        private mockService: MockService,
        private snackBar: MatSnackBar,
    ) { }

    GetTableData$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(TableDataActions.BeginGetTableDataAction),
            mergeMap(_ =>
                this.mockService.getData$().pipe(
                    // We sort the data first
                    tap(data => {
                        return data.sort((a, b) => {
                            return a.status.localeCompare(b.status) || a.name.localeCompare(b.name);
                        });
                    }),
                    map(data => (TableDataActions.SuccessGetTableDataAction({ payload: data }))),
                    catchError((error: Error) => {
                        this.snackBar.open(JSON.stringify(error?.message), undefined, {
                            duration: 2000,
                            panelClass: ['toast-warning'],
                        });
                        return [
                            TableDataActions.ErrorTableDataAction({ error }),
                            SelectedInputActions.DecrementSelectedInput()
                        ]
                    }),
                ),
            )
        )
    );
}