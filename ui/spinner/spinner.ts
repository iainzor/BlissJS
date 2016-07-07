import {Component, Input, OnChanges, ViewChild} from "@angular/core"
import {NgClass} from "@angular/common"
import {Block} from "../block/block"

@Component({
	selector: "ui-spinner",
	styleUrls: ["./bliss/ui/spinner/spinner.css"],
	directives: [Block],
	template: `
	<ui-block [z]="z">
		<svg width='84px' height='84px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><circle cx="50" cy="50" r="40" stroke="#232D35" fill="none" stroke-width="10" stroke-linecap="round"></circle><circle cx="50" cy="50" r="40" stroke="#00bcd4" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate><animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="200.8 50.19999999999999;1 250;200.8 50.19999999999999"></animate></circle></svg>
	</ui-block>
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