import {Component, ElementRef, Input, Output, EventEmitter, OnChanges, forwardRef} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Router, RouterLink} from "angular2/router"
import {Nav, NavComponent} from "./nav"

@Component({
	selector: "ui-nav-page",
	styleUrls: ["./bliss/ui/components/nav-page.css"],
	directives: [CORE_DIRECTIVES, (forwardRef(() => NavComponent))],
	template: `
		<i *ngIf="page?.icon" class="material-icons">{{page.icon}}</i>
		<span *ngIf="!page?.icon">{{page?.title}}</span>
	`
})
export class NavPageComponent implements OnChanges
{
	@Input() page:NavPage;
	
	@Output() activate:EventEmitter<NavPageInterface> = new EventEmitter<NavPageInterface>()
	@Output() deactivate:EventEmitter<NavPageInterface> = new EventEmitter<NavPageInterface>()
	
	constructor(private _router:Router, private _elRef:ElementRef) {}
	
	onPageClicked($event:MouseEvent, page:NavPageInterface) {
		$event.preventDefault();
		
		if ((typeof page.path) !== "undefined") {
			this._router.navigateByUrl(page.path).then(() => {
				this.activate.emit(page);
			});
		} else {
			page.isActive = !page.isActive;
			
			if (page.isActive) {
				this.activate.emit(page);
			} else {
				this.deactivate.emit(page);
			}
		}
	}
	
	ngOnChanges(changes) {
		if (changes.page) {
			var page = changes.page.currentValue;
			if (!page.is) {
				page.is = "link";
			}
		}
	}
}

export interface NavPageInterface
{
	is?:string
	path?:string
	title?:string
	icon?:string
	isActive?:boolean
	
	nav?:Nav
}

export class NavPage implements NavPageInterface
{
	is:string = "link"
	path:string = null
	title:string = null
	icon:string = null
	isActive:boolean = false
}