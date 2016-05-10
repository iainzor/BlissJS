import {Component, Input, OnChanges, ViewChild} from "@angular/core"
import {NgClass} from "@angular/common"
import {Block} from "../block/block"

@Component({
	selector: "ui-spinner",
	styleUrls: ["./bliss/ui/spinner/spinner.css"],
	directives: [Block],
	template: `
	<ui-block [z]="z"></ui-block>
	`,
	host: {
		"[class.visible]": "isVisible",
		"[class.hidden]": "isHidden"
	}
})
export class Spinner implements OnChanges
{
	@Input() visible:boolean = true;
	@Input() z:number = 2;
	
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