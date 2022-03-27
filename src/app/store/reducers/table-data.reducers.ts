import { Action, createReducer, on } from '@ngrx/store';

import * as TableDataActions from '../actions/table-data.actions';
import TableState from '../state/table.state';

export const initial = {
    tableData: [],
    isLoading: false,
    error: undefined,
} as TableState;


const reducer = createReducer(
    initial,
    on(TableDataActions.BeginGetTableDataAction, state => {
        return { ...state, isLoading: true }
    }),
    on(TableDataActions.SuccessGetTableDataAction, (state: TableState, { payload }) => {
        return { ...state, tableData: payload, isLoading: false, error: undefined };
    }),
    on(TableDataActions.ErrorTableDataAction, (state: TableState, { error }) => {
        return { ...state, error, tableData: [], isLoading: false };
    }),
    on(TableDataActions.ResetTableDataAction, _ => initial),
);

export function TableDataReducer(state: TableState | undefined, action: Action) {
    return reducer(state, action);
}