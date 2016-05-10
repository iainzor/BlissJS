import {Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
	selector: "ui-checkbox",
	styleUrls: ["./bliss/ui/checkbox/checkbox.css"],
	template: `
		<div class="box checked">
			<div class="material-icons">check_box</div>
		</div>
		<div class="box unchecked">
			<div class="material-icons">check_box_outline_blank</div>
		</div>
	`,
	host: {
		"[class.on]": "checked"
	}
})
export class Checkbox
{
	@Input() checked:boolean;
}