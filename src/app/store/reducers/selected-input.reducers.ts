import { Action, createReducer, on } from '@ngrx/store';
import * as SelectedInputActions from '../actions/selected-input.actions';

const reducer = createReducer(
    0,
    on(SelectedInputActions.SetSelectedInput, (_, { payload }) => {
        return payload;
    }),
    on(SelectedInputActions.DecrementSelectedInput, state => {
        return state - 1;
    }),
);

export function SelectedInputReducer(state: number | undefined, action: Action) {
    return reducer(state, action);
}