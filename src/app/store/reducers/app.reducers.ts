import { ActionReducerMap } from "@ngrx/store";
import AppState from "../state/app.state";
import { SelectedInputReducer } from "./selected-input.reducers";
import { TableDataReducer } from "./table-data.reducers";

export const appReducers: ActionReducerMap<AppState> = {
    data: TableDataReducer,
    selectedInput: SelectedInputReducer
}