import {Component, Input} from "@angular/core"
import {Block} from "../block/block"

@Component({
	selector: "ui-switch",
	directives: [Block],
	styleUrls: ["./bliss/ui/switch/switch.css"],
	template: `
		<ui-block z="1"></ui-block>
		<div class="bar"></div>
	`,
	host: {
		"[class.on]": "on"
	}
})
export class Switch
{
	@Input() on:boolean = false;
}