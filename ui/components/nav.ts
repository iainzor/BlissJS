import {Component, Input} from "angular2/core"
import {NgFor} from "angular2/common"
import {Router, RouterLink, OnActivate, CanDeactivate} from "angular2/router"
import {NavPageInterface, NavPageComponent} from "./nav-page"

@Component({
	selector: "ui-nav",
	template: `
		<ui-nav-page *ngFor="#page of nav?.pages" [page]="page"></ui-nav-page>
	`,
	directives: [NgFor, NavPageComponent, RouterLink],
	styleUrls: ["./bliss/ui/components/nav.css"]
})
export class NavComponent
{
	@Input() nav:Nav = new Nav()
	
	constructor(private router:Router) {}
	
	navigate(page:NavPageInterface) {
		this.nav.pages.forEach((p) => p.isActive = false);
		
		this.router.navigate([page.path]).then(() => {
			page.isActive = true;
		});
	}
}

export interface NavInterface
{
	pages:Array<NavPageInterface>
}

export class Nav
{
	pages:Array<NavPageInterface> = []
}