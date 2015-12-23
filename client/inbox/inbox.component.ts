import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {InboxListComponent}   from './inbox-list.component';
// import {EmailDetailComponent} from '../email-detail.component';
// import {InboxService}         from './inbox.service';

@Component({
  template: `
    <h1>Something From Inbox</h1>
	<router-outlet></router-outlet>
  `,
	directives: [RouterOutlet]
})

@RouteConfig([
	{ path: '/', name: 'Inbox', component: InboxListComponent, useAsDefault: true} 
])

export class InboxComponent { }