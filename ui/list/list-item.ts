import {Component} from "@angular/core"

@Component({
	selector: "ui-list-item",
	styleUrls: ["./bliss/ui/list/list-item.css"],
	template: `
		<ng-content></ng-content>
	`
})
export class ListItem
{
	
}