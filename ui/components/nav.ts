import {Component, Input, OnChanges} from "angular2/core"
import {NgFor} from "angular2/common"
import {Router, RouterLink} from "angular2/router"
import {NavPageInterface, NavPageComponent} from "./nav-page"

@Component({
	selector: "ui-nav",
	template: `
		<ui-nav-page 
			*ngFor="#page of nav?.pages" 
			[page]="page"
			(activate)="onActivate(page)">
		</ui-nav-page>
	`,
	directives: [NgFor, NavPageComponent],
	styleUrls: [
		"./bliss/ui/components/nav.css"
	]
})
export class NavComponent
{
	@Input() nav:Nav;
}

export interface NavInterface
{
	pages:Array<NavPageInterface>
}

export class Nav
{
	pages:Array<NavPageInterface> = []
}