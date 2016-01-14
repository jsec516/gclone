/*
 * Email Detail Component
 * It should be displayed after user clicks on individula email
 */

import {Component, OnInit}     from 'angular2/core';
import {RouteConfig, RouterOutlet, Router, RouteParams} from 'angular2/router';

import {Email, EmailService}  from '../../services/email.service';

@Component({
    selector: 'email-details',
    template: require('../templates/email-details.html'),
    styles: [require('../../../assets/css/details.css').toString()],
    directives: [RouterOutlet]
})
export class EmailDetailsComponent implements OnInit {
    public email: Email;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: EmailService
    ) { }

    ngOnInit() {
        // console.log(this.isOpen);
        let id = this._routeParams.get('id');
        this._service.getEmailById(id)
            .subscribe(email => { return this.email = email[0]; });
    }

}
