import { createAction, props } from '@ngrx/store';
import { TableData } from 'src/app/model/table.model';

export const BeginGetTableDataAction = createAction('[TableData] - Begin Get TableData');
export const SuccessGetTableDataAction = createAction(
    '[TableData] - Success Get TableData',
    props<{ payload: TableData[] }>()
);

export const ResetTableDataAction = createAction('[TableData] - Reset TableData');
export const ErrorTableDataAction = createAction('[TableData] - Error', props<{ error: Error }>());