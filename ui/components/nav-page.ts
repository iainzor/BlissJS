import {Component, Input, ViewEncapsulation} from "angular2/core"

@Component({
	selector: "ui-nav-page",
	template: `
		<i class="glyphicon glyphicon-{{page.icon}}"></i>
	`,
	styleUrls: ["./bliss/ui/components/nav-page.css"],
	encapsulation: ViewEncapsulation.None
})
export class NavPageComponent
{
	@Input() page:NavPage = new NavPage();
}

export interface NavPageInterface
{
	path:string
	title:string
	icon:string
	isActive?:boolean
}

export class NavPage implements NavPageInterface
{
	path:string = ""
	title:string = null
	icon:string = null
	isActive:boolean = false
}