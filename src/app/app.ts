/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {InboxComponent} from './inbox/components/inbox';
import {ComposeComponent} from './compose/components/compose';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ ...ROUTER_DIRECTIVES, ComposeComponent ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', component: InboxComponent, name: 'Default' },
  { path: '/**', redirectTo: ['Default'] }
])
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  composeStatus=false;
  constructor() {

  }
  
  showCompose(event){
      event.preventDefault();
      this.composeStatus=true;
      console.log('fired');
  }
}
