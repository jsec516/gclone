import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {InboxListComponent}   from './inbox-list.component';
// import {EmailDetailComponent} from '../email-detail.component';
// import {InboxService}         from './inbox.service';

@Component({
	templateUrl: './client/inbox/inbox-list.template.html',
  	directives: [RouterOutlet]
})

@RouteConfig([
	{ path: '/', name: 'Inbox', component: InboxListComponent, useAsDefault: true} 
])

export class InboxComponent { }