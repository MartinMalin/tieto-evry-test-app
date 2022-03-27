import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TableDataEffect } from './store/effects/table-data.effects';

import { TableComponent } from './component/table/table.component';
import { StatusComponent } from './component/status/status.component';
import { UserInputComponent } from './component/user-input/user-input.component';
import { MaterialModule } from 'src/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StatusComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TableDataEffect]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
