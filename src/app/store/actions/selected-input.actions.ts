import { createAction, props } from '@ngrx/store';

export const DecrementSelectedInput = createAction('[Selected Input] - Decrement Selected Input');
export const SetSelectedInput = createAction(
    '[Selected Input] - Set Selected Input',
    props<{ payload: number }>());