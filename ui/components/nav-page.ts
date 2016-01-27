import {Component, Input, ViewEncapsulation} from "angular2/core"
import {RouterLink} from "angular2/router"
import {Nav} from "./nav"

@Component({
	selector: "ui-nav-page",
	styleUrls: ["./bliss/ui/components/nav-page.css"],
	encapsulation: ViewEncapsulation.None,
	directives: [RouterLink],
	template: `
		<a [routerLink]="[page.path]" [class.active]="page.isActive">
			<i class="glyphicon glyphicon-{{page.icon}}"></i>
		</a>
	`
})
export class NavPageComponent
{
	@Input() page:NavPage = new NavPage();
}

export interface NavPageInterface
{
	path?:string
	title:string
	icon:string
	isActive?:boolean
	
	navs?:Array<Nav>
}

export class NavPage implements NavPageInterface
{
	path:string = null
	title:string = null
	icon:string = null
	isActive:boolean = false
}