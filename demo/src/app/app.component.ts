import { Component, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  snippet = `
<pre>
    <code class="typescript highlight">
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "hello world";
    }
};
    </code>
</pre>
  `;
}
