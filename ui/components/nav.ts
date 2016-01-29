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
	directives: [NgFor, NavPageComponent, RouterLink],
	styleUrls: [
		"./bliss/ui/components/nav.css"
	]
})
export class NavComponent implements OnChanges
{
	@Input() nav:Nav;
	
	constructor(private router:Router) {
		router.subscribe((path) => {
			this.activatePage(path);
		});
	}
	
	ngOnChanges(changes) {
		setTimeout(() => {
			this.activatePage(this.router.lastNavigationAttempt);
		}, 0);
	}
	
	activatePage(path:string) {
		if (this.nav && this.nav.pages) {
			this.nav.pages.forEach((page) => {
				page.isActive = (path === page.path);
			});
		}
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