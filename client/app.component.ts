import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InboxComponent} from './inbox/inbox.component';
// import {EmailDetailComponent} from './email-detail/email-detail.component';

@Component({
	selector: 'gclone-app',
	templateUrl: './client/app.template.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { // Crisis Center child route
   path: '/inbox/...',
   name: 'Inbox',
   component: InboxComponent,
    useAsDefault: true
  }
  // { path: '/inbox', name: 'Inbox', component: InboxComponent}
  // {path: '/email/:id', name: 'EmailDetail', component: EmailDetailComponent}
])

export class AppComponent {
	
	
}