import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableData } from 'src/app/model/table.model';

@Component({
    selector: 'app-table',
    styleUrls: ['table.component.scss'],
    templateUrl: 'table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    displayedColumns: string[] = ['name', 'status'];
    tableData!: MatTableDataSource<TableData>;

    @Input() set dataSource(data: MatTableDataSource<TableData>) {
        this.tableData = data;
        this.tableData.paginator = this.paginator;
    }

    ngAfterViewInit() {
        this.tableData.paginator = this.paginator;
    }
}
