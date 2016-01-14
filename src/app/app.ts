/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, Location} from 'angular2/router';

// import {LoginComponent} from './login/components/login';
import {InboxComponent} from './inbox/components/inbox';
import {ComposeComponent} from './compose/components/compose';
import {EmailDetailsComponent} from './email-details/components/email-details';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    directives: [...ROUTER_DIRECTIVES, ComposeComponent, EmailDetailsComponent],
    template: require('./app.html')
})
@RouteConfig([
    // { path: '/', component: LoginComponent, name: 'Default' },
    { path: '/inbox', component: InboxComponent, name: 'Default' },
    { path: '/details/:id', component: EmailDetailsComponent, name: 'Details' },
    { path: '/**', redirectTo: ['Default'] }
])
export class App {
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';
    composeStatus = false;
    constructor(private location:Location) {
        console.log('in app', this.location.path());
    }

    showCompose(event) {
        event.preventDefault();
        this.composeStatus = true;
        console.log('fired');
    }
}
