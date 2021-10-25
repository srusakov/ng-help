import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpLayoutComponent} from './components';
import {TocHelpTopicComponent, Topic1HelpTopicComponent, Topic2HelpTopicComponent} from './topics';

const routes: Routes = [{
    path: '',
    component: HelpLayoutComponent,
    children: [
        {
            path: 'toc', component: TocHelpTopicComponent, data: {title: 'Table of contents'}
        },
        {
            path: 'topic1', component: Topic1HelpTopicComponent, data: {title: 'Help topic 1'}
        },
        {
            path: 'topic2', component: Topic2HelpTopicComponent, data: {title: 'Help topic 2'}
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRoutingModule {
}
