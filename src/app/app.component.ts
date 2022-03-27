import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import AppState from './store/state/app.state';
import * as TableDataActions from './store/actions/table-data.actions';

import { MatTableDataSource } from '@angular/material/table';
import { TableData } from './model/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public dataSource?: MatTableDataSource<TableData>;
  public tableData$ = this.store.pipe(select('data'));
  public isLoading?: boolean;

  public constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
    this.tableDataSubscription();
  }


  private tableDataSubscription() {
    this.tableData$.subscribe(data => {
      this.isLoading = data?.isLoading;
      this.dataSource = new MatTableDataSource(data?.tableData);
      this.cdr.markForCheck();
    });
  }

  public callService() {
    this.store.dispatch(TableDataActions.BeginGetTableDataAction());
  }
}
