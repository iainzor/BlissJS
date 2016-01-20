import "rxjs/Rx"
import {Observable} from "rxjs/Rx"
import {Component} from "angular2/core"
import {Http, Response} from "angular2/http"

@Component({
	selector: "[bliss-app]"
})
export class BlissApp
{
	url: string
	public config:Object
	
	constructor(public http:Http) {
		this.config = {};
	}
	
	load(url:string) : Observable<Response> {
		var req = this.http.get(url);
		req.map(res => res.json());
		
		return req;
	}
}