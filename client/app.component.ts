import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {InboxComponent} from './inbox/inbox.component';
import {EmailDetailComponent} from './email-detail/email-detail.component';

@Component({
	selector: 'gclone-app',
	templateUrl: './client/app.template.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  /*{ 
    // Inbox child route
    path: '/inbox/...',
    name: 'Inbox',
    component: InboxComponent,
    useAsDefault: true
  },*/
  
  { path: '/inbox', name: 'Inbox', component: InboxComponent},
  { path: '/email/:id', name: 'EmailDetail', component: EmailDetailComponent}
])

export class AppComponent {
	
  constructor(
    private _router: Router
  ){}

	onCompose(){
    // this._router.navigate(['EmailDetail', { id: email.id }]);
  }
}