import {Component, OnInit}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {InboxListComponent}   from './inbox-list.component';
import {Email, InboxService}  from './inbox.service';
// import {EmailDetailComponent} from '../email-detail.component';


@Component({
	templateUrl: './client/inbox/inbox-list.template.html',
  	directives: [RouterOutlet],
	providers: [InboxService],
})

@RouteConfig([
	{ path: '/', name: 'Inbox', component: InboxListComponent, useAsDefault: true} 
])

export class InboxComponent implements OnInit{ 
	// public emails: Email[];
	emails: Object[];
	constructor(
		private _service: InboxService
	){}
	ngOnInit() {
		this.emails = [];
		this._service.getEmails().subscribe(emails => { this.emails = emails })
	}
	
}