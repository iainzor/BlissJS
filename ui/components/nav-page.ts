import {Component, Input, forwardRef} from "angular2/core"
import {Router, RouterLink} from "angular2/router"
import {Nav, NavComponent} from "./nav"

@Component({
	selector: "ui-nav-page",
	styleUrls: ["./bliss/ui/components/nav-page.css"],
	directives: [(forwardRef(() => NavComponent))],
	template: `
		<a [href]="page?.path || ''" [title]="page?.title" [class.active]="page?.isActive" (click)="onPageClicked($event, page)">
			<i class="material-icons">{{page?.icon}}</i>
		</a>
	`
})
export class NavPageComponent
{
	@Input() page:NavPage;
	
	constructor(private _router:Router) {}
	
	onPageClicked($event:MouseEvent, page:NavPageInterface) {
		$event.preventDefault();
		
		if ((typeof page.path) !== "undefined") {
			this._router.navigateByUrl(page.path);
		} else {
			page.isActive = !page.isActive;
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