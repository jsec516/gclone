/*
 * Inbox Service
 * Will be used for fetching emails
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

export class Email {
    constructor(public id: number,
        public isImportant: boolean,
        public from: string,
        public subject: string,
        public body: string,
        public sent: string) { }
}

@Injectable()
export class EmailService {
    _http: Http;
    count: number = 0;
    constructor(http: Http) {
        this._http = http;
    }

    getEmails() {
        return this._http.get('./emails.json').map(res => res.json());
    }

    getEmailById(id: string) {
        console.log('fired', this.count);
        this.count++;
        return this._http.get('./emails.json').map(res => res.json())
            .map((tasks: Array<any>) => {
                let result: Array<any> = [];
                if (tasks) {
                    tasks.forEach((task) => {
                        if (task.id.toString() === id.toString()) {
                            result.push(new Email(task.id, task.isImportant,
                                task.from, task.subject, task.body, task.sent));
                        }
                    });
                }
                return result;
            });
    }
}
