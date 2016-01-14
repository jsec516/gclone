/*
 * Compose Component
 * It should be displayed after user clicks on compose button
 */

import {Component, OnInit, Input}     from 'angular2/core';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';

import {ComposeService}  from '../services/compose.service';

@Component({
    selector: 'compose',
    template: require('../templates/compose.html'),
    directives: [RouterOutlet],
    providers: [ComposeService],
    inputs: ['isOpen']
})
export class ComposeComponent implements OnInit {
    // public emails: Email[];
    @Input() isOpen: string;
    minimizeClass: string = '';

    constructor(
        private _router: Router,
        private _service: ComposeService
    ) { }

    ngOnInit() {
        // console.log(this.isOpen);
    }

    minimize() {
        this.minimizeClass = 'minimized';
        console.log('minimzed');
    }
}
