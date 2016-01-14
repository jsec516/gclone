/*
 * Inbox Component
 * It should display after login
 */
import {Component, OnInit}     from 'angular2/core';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';

import {Email, EmailService}  from '../../services/email.service';

@Component({
    template: require('../templates/inbox.html'),
    directives: [RouterOutlet]
})
export class InboxComponent implements OnInit {

    public emails: Email[];

    constructor(
        private _router: Router,
        private _service: EmailService
    ) { }

    ngOnInit() {
        this.emails = [];
        this._service.getEmails().subscribe(emails => { this.emails = emails; });
    }

    onSelect(email: Email) {
        this._router.navigate(['Details', { id: email.id }]);
    }
}
