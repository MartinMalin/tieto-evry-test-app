import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { skip } from 'rxjs';
import AppState from 'src/app/store/state/app.state';
import * as SelectedInputActions from '../../store/actions/selected-input.actions';

@Component({
    selector: 'app-user-input',
    styleUrls: ['user-input.component.scss'],
    templateUrl: 'user-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInputComponent {

    public form = new FormGroup({});
    private inputNumber = new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]);
    public selectedInput$ = this.store.pipe(select('selectedInput'));

    @Output() serviceCalled = new EventEmitter<void>();

    public constructor(
        formBuilder: FormBuilder,
        private store: Store<AppState>,
    ) {
        this.form = formBuilder.group({
            inputNumber: this.inputNumber
        });

        this.inputChangeSubscription();
        this.inputSliceSubscription();

    }

    private inputSliceSubscription() {
        this.selectedInput$.pipe(
            skip(1)
        ).subscribe(value => {
            this.form.get('inputNumber')?.patchValue(value);
        });
    }

    private inputChangeSubscription() {
        this.form.get('inputNumber')?.valueChanges.subscribe(value => {
            this.store.dispatch(SelectedInputActions.SetSelectedInput({ payload: value }));
        });
    }
}
