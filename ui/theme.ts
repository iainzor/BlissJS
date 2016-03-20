import {Injectable, Input, OnChanges} from "angular2/core"
import {Subscription, Subscriber, Observable, Observer} from "rxjs"

@Injectable()
export class Theme implements OnChanges
{
	@Input() primaryBackgroundColor:string = "#607D8B";
	@Input() primaryTextColor:string = "#fff";
	
	@Input() accentBackgroundColor:string = "#8BC34A";
	@Input() accentTextColor:string = "#fff";
	
	subscriber:Subscriber<Theme>;
	observer:Observer<Theme>;
	
	constructor() {}
	
	ngOnChanges() {
		
	}
	
	decorate(el:HTMLElement, type:string = "primary") {
		console.log("TEST");
		this.subscriber.add((theme) => {
			console.log(theme);
			let background, text;
			
			switch (type) {
				case "accent":
					background = this.accentBackgroundColor;
					text = this.accentTextColor;
				case "primary":
				default:
					background = this.primaryBackgroundColor;
					text = this.primaryTextColor;
					break;
			}
			
			el.style.backgroundColor = background;
			el.style.color = text;
		});
	}
}