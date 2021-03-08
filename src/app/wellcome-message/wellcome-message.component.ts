import { Component } from "@angular/core";

@Component({
    selector: 'app-wellcome-message',
    template: '<h2>{{ welcome_message }}</h2>'
})
export class WellcomeMessageComponent {
    public welcome_message = 'Hellow World!';
}