import {Component, Input, ElementRef, OnChanges} from "angular2/core"
import {NgClass} from "angular2/common"

@Component({
	selector: "ui-spinner",
	styleUrls: ["./bliss/ui/spinner/spinner.css"],
	template: ``,
	host: {
		"[class.visible]": "visible"
	}
})
export class Spinner
{
	@Input() visible:boolean = false;
}