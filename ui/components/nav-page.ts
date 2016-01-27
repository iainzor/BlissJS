import {Component, Input, ViewEncapsulation} from "angular2/core"
import {Router, RouterLink} from "angular2/router"
import {Nav, NavComponent} from "./nav"

@Component({
	selector: "ui-nav-page",
	styleUrls: ["./bliss/ui/components/nav-page.css"],
	directives: [],
	template: `
		<a [href]="page.path" [class.active]="page.isActive" (click)="onPageClicked($event, page)">
			<i class="glyphicon glyphicon-{{page.icon}}"></i>
		</a>
		<!--<ui-nav *ngIf="page.nav" [nav]="page.nav"></ui-nav>-->
	`
})
export class NavPageComponent
{
	@Input() page:NavPage = new NavPage();
	
	constructor(private _router:Router) {}
	
	onPageClicked($event:MouseEvent, page:NavPageInterface) {
		$event.preventDefault();
		
		if (page.path) {
			this._router.navigateByUrl(page.path);
		} else {
			$event.preventDefault();
			console.log(page);
		}
	}
}

export interface NavPageInterface
{
	path?:string
	title:string
	icon?:string
	isActive?:boolean
	
	nav?:Nav
}

export class NavPage implements NavPageInterface
{
	path:string = null
	title:string = null
	icon:string = null
	isActive:boolean = false
}