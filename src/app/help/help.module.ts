import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HelpLayoutComponent, HelpLinkComponent} from './components';

import {HelpRoutingModule} from './help-routing.module';
import {
  TocHelpTopicComponent,
  Topic1HelpTopicComponent,
  Topic2HelpTopicComponent
} from './topics';


@NgModule({
  declarations: [
      HelpLayoutComponent,
      HelpLinkComponent,
      TocHelpTopicComponent,
      Topic1HelpTopicComponent,
      Topic2HelpTopicComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
