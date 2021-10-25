import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <p>
            This is table of contents
        </p>
        <ul>
            <li><app-help-link helpTopic="topic1">Help topic 1</app-help-link> </li>
            <li><app-help-link helpTopic="topic2">Help topic 2</app-help-link> </li>
        </ul>
    `
})
export class TocHelpTopicComponent {

}
