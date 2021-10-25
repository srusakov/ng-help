import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="cdk-overlay-container" style="z-index: 9999;">
            <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
                 (click)="closePopup()"></div>
            <div class="cdk-global-overlay-wrapper" style="justify-content: right; align-items: center;">
                <div class="app-help-overlay cdk-overlay-pane">
                    <div class="mat-dialog-container w-100 h-100 d-flex flex-column">
                        <div class="app-help-caption d-flex w-100 justify-content-between align-items-center">
                            <h2>{{ title }}</h2>
                            <div>
                                <a [routerLink]="['', {outlets: {help: ['help', 'toc']}}]"
                                   class="mr-3" title="Table of contents">TOC</a>
                                <a (click)="closePopup()" class="mr-3" href="#" title="Close this help window">X</a>
                            </div>
                        </div>

                        <div class="app-help-content flex-grow-1">
                            <router-outlet></router-outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./help-layout.component.scss']
})
export class HelpLayoutComponent  implements OnInit, OnDestroy {
    title: string = 'HELP SYSTEM';
    routerData$: Subscription | null = null;
    routerEvents$: Subscription | null = null;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        // this subscription works when help just shown
        this.routerData$ = this.route.data.subscribe(x => {
            this.title = this.route.root.children.filter(c => c.outlet === 'help')[0]?.firstChild?.firstChild?.snapshot.data?.title;
        });
        // this subscription fired when a navigation inside help occurs
        this.routerEvents$ = this.router.events.subscribe((x) => {
            if (x instanceof NavigationEnd) {
                this.title = this.route.root.children.filter(c => c.outlet === 'help')[0]?.firstChild?.firstChild?.snapshot.data?.title;
            }
        });
    }

    ngOnDestroy() {
        if (this.routerData$) this.routerData$.unsubscribe();
        if (this.routerEvents$) this.routerEvents$.unsubscribe();
    }

    public closePopup(): void {
        this.router.navigate(['', { outlets: { help: null } }]);
    }
}
