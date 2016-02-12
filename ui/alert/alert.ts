import {Component, Input} from "angular2/core"

@Component({
	selector: "ui-alert",
	styleUrls: ["./bliss/ui/alert/alert.css"],
	template: `
		<div [attr.class]="className()">
			<ng-content></ng-content>
		</div>
	`
})
export class Alert
{
	@Input("is") type:string = "danger";
	
	constructor() {}
	
	className() : string {
		return ["alert", "alert-"+ this.type].join(" ");
	}
}