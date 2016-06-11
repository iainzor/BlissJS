import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Block} from "../block/block"
import {Theme} from "../theme"

@Component({
	selector: "ui-switch",
	directives: [Block],
	styleUrls: ["./bliss/ui/switch/switch.css"],
	template: `
		<div class="switch">
			<ui-block z="1" [style.background-color]="switchColor"></ui-block>
			<div class="bar" [style.background-color]="barColor"></div>
		</div>
		<div class="content">
			<ng-content></ng-content>
		</div>
	`,
	host: {
		"[class.on]": "on",
		"[class.reverse]": "reverse",
		"(click)": "toggle($event)"
	}
})
export class Switch
{
	constructor(private theme:Theme) {}

	@Input() reverse:boolean = false;
	@Input() on:boolean = false;
	@Output() onChange:EventEmitter<boolean> = new EventEmitter<boolean>();

	toggle(e:Event) {
		e.preventDefault();
		this.on = !this.on;
		this.onChange.emit(this.on);
	}

	get switchColor() : string {
		return this.on ? this.theme.accentColor : null;
	}

	get barColor() : string {
		return this.on ? this.theme.accentColorLight : null;
	}
}