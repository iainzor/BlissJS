import {Component, Input, OnChanges, ViewChild} from "@angular/core"
import {NgClass} from "@angular/common"
import {Block} from "../block/block"

@Component({
	selector: "ui-spinner",
	styleUrls: ["./bliss/ui/spinner/spinner.css"],
	directives: [Block],
	template: `
	<svg [attr.width.px]="width" [attr.height.px]="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
		<rect x="0" y="0" width="100" height="100" fill="none"></rect>
		<circle cx="50" cy="50" r="40" stroke="#232D35" fill="none" stroke-width="14" stroke-linecap="round"></circle>
		<circle cx="50" cy="50" r="40" stroke="#00bcd4" fill="none" stroke-width="8" stroke-linecap="round">
			<animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
			<animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="200 50; 1 250; 200 50"></animate>
		</circle>
	</svg>
	`,
	host: {
		"[class.visible]": "isVisible",
		"[class.hidden]": "isHidden"
	}
})
export class Spinner implements OnChanges
{
	@Input() visible:boolean = false;
	@Input() z:number = 2;
	@Input() width:number = 80;
	@Input() height:number = 80;
	
	isLoading:boolean = true;	
	isVisible:boolean = true;
	isHidden:boolean = false;
	
	ngOnChanges() {
		if (this.visible) {
			this.isHidden = false;
			setTimeout(() => {
				this.isVisible = true;
			}, 10)
		} else {
			this.isVisible = false;
			setTimeout(() => {
				this.isHidden = true;
			}, 300);
		}
	}
}