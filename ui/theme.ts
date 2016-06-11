import {Injectable} from "@angular/core"
import {Subscription, Subscriber, Observable, Observer} from "rxjs"

@Injectable()
export class Theme
{
	primaryColor:string;
	primaryColorDark:string;
	primaryColorLight:string;
	primaryTextColor:string;

	accentColor:string;
	accentColorDark:string;
	accentColorLight:string;
	accentTextColor:string;
}