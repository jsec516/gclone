/*
 * Inbox Component
 * It should display after login
 */
import {Component, OnInit}     from 'angular2/core';
import {RouteConfig, RouterOutlet, Router, Location} from 'angular2/router';

class User {
    constructor(public email?: string, public password?: string) {

    }
}
@Component({
    template: require('../templates/login.html'),
    styles: [require('../../../assets/css/login.css').toString()],
    directives: [RouterOutlet]
})
export class LoginComponent implements OnInit {

    public user: User;

    constructor(
        private _router: Router,
        private location: Location
    ) {
        this.user = new User();
        console.log("login ", this.location.path());
    }

    ngOnInit() {
    }

    login() {
        console.log(this.user);
        this._router.navigate(['Inbox']);
    }
}
