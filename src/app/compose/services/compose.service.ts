/*
 * Inbox Service
 * Will be used for fetching emails
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ComposeService {
    _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

}
