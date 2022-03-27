import { TableData } from "src/app/model/table.model";

export default class TableState {
    tableData?: TableData[] | [];
    error?: Error;
    isLoading?: boolean;
}
