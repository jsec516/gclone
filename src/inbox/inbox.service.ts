import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

export class Email {
	constructor(public id: number, public isImportant: boolean, public from: string, public subject: string, public body: string, public sent: string) { }
}

@Injectable()
export class InboxService{
	_http: Http;
	// results: Object;

	constructor(http: Http) {
	    this._http = http;
    }
	// getEmails() { return emailPromise; }
	getEmails() {
		// return this.loadPrimaryEmails();
		return this._http.get('./emails.json').map(res => res.json());
	}
	// loadPrimaryEmails() {
	// 	this._http.get('./emails.json').map((res: Response) => res.json());
	// }
}

// var EMAILS = [
// 	new Email(11, true, 'freelancer.com', 'what are you waiting for?', 'My Bonnie lies over the ocean.My Bonnie lies over the ocean.', '2:40pm'),
// 	new Email(12, false, 'freelancer.com', 'what are you waiting for?', 'My Bonnie lies over the ocean.My Bonnie lies over the ocean.', '2:40pm'),
// 	new Email(13, false, 'freelancer.com', 'what are you waiting for?', 'My Bonnie lies over the ocean.My Bonnie lies over the ocean.', '2:40pm')
// ]

// var emailPromise = Promise.resolve(EMAILS);