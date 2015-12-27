import {Component, OnInit}     from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Email, EmailService} from '../email.service';

@Component({
	templateUrl: './client/email-detail/email-detail.template.html',
	providers: [EmailService]
})

export class EmailDetailComponent  implements OnInit { 
	// public emails: Email[];
	public email: Email;
	constructor(
	 	private _router:Router,
		private _routeParams:RouteParams,
		private _service: EmailService
	){
		// let id = this._routeParams.get('id');
		// this._service.getEmailById(id).subscribe(email => { this.email = email[0]; });
	}

	ngOnInit() {
		console.log("Callend ngOnInit")
		let id = this._routeParams.get('id');
		console.log(id);
		// this.email = id;
		this._service.getEmailById(id).subscribe(email => { return this.email = email[0]; });
	}
}