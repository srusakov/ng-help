import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-help-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<a (click)="onClick($event)" class="arcadia-blue pointer"><ng-content></ng-content></a>`
})
export class HelpLinkComponent {
    @Input() helpTopic: string = '';

    constructor(private router: Router) {
    }

    public onClick($event: MouseEvent): void {
        this.router.navigate([{outlets: {help: ['help', this.helpTopic]}}]);
    }
}
