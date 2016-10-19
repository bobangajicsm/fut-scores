import { Component } from '@angular/core';
import {FutService} from "./services/fut.services";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers:[FutService]
})
export class AppComponent { }
