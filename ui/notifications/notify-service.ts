import {Injectable} from "angular2/core"
import {Observable} from "rxjs/Observable"
import {Observer} from "rxjs/Observer"
import {Subscription} from "rxjs/Subscription"
import {MessageDefinition} from "./message-definition"

@Injectable()
export class NotifyService
{
	private source:Observable<MessageDefinition>;
	private observer:Observer<MessageDefinition>;
	
	constructor() {
		this.source = new Observable<MessageDefinition>(
			(observer) => this.observer = observer
		);
	}
	
	subscribe(next?:any, error?:any, complete?:any) : Subscription {
		return this.source.subscribe(next, error, complete);
	}
	
	push(message:MessageDefinition) {
		this.observer.next(message);
	}
}