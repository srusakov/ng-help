import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        This is help topic 1
    `
})
export class Topic1HelpTopicComponent {

}
