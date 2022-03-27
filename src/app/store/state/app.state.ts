import TableState from "./table.state";

export default class AppState {
    data?: TableState;
    selectedInput?: number
}

export const intialState = {
    data: {},
    selectedInput: undefined
} as AppState;