import {Component, Input} from "angular2/core"
import {Block} from "../block/block"

@Component({
	selector: "ui-button",
	template: `
		<ui-block [z]="z">
			<div class="material-icons">{{icon}}</div>
		</ui-block>
	`,
	styleUrls: ["./bliss/ui/button/button.css"],
	directives: [Block]
})
export class Button 
{
	@Input() z:number = 0;
	@Input() icon:string;
}