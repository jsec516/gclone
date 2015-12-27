import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

export class Email {
	constructor(public id: number, public isImportant: boolean, public from: string, public subject: string, public body: string, public sent: string) { }
}

@Injectable()
export class EmailService {
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

	getEmailById(id: string) {
		// return this.loadPrimaryEmails();
		return this._http.get('./emails.json').map(res => res.json())
		.map((tasks: Array<any>) => {
	         let result:Array<any> = [];
	         if (tasks) {
		        tasks.forEach((task) => {
					// console.log(task.id, id, task.id.toString() === id.toString());
					if (task.id.toString()===id.toString()){
		           		result.push(new Email(task.id, task.isImportant, 
	                                 task.from, task.subject, task.body, task.sent));
		       		}
	          	});
        	}
			 console.log(result);
			return result;
		});
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