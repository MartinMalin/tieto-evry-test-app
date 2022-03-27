import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableStatus } from 'src/app/model/table.model';

@Component({
    selector: 'app-status',
    styleUrls: ['status.component.scss'],
    templateUrl: 'status.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {

    @Input() public status?: TableStatus;

    public getStatus() {
        switch (this.status) {
            case TableStatus.clean:
                return `status-${TableStatus.clean}`
            case TableStatus.dirty:
                return `status-${TableStatus.dirty}`
            case TableStatus.replace:
                return `status-${TableStatus.replace}`
            default:
                return '';
        }
    }
}
