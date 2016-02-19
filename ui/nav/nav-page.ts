import {Component, ElementRef, Input, Output, EventEmitter, OnChanges, forwardRef} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Router, RouterLink} from "angular2/router"
import {NavInterface} from "./nav"
import {Tooltip} from "../tooltip/tooltip"

@Component({
	selector: "ui-nav-page",
	styleUrls: ["./bliss/ui/nav/nav-page.css"],
	directives: [CORE_DIRECTIVES, Tooltip],
	template: `
		<i *ngIf="page?.icon" class="material-icons">{{page.icon}}</i>
		<span *ngIf="!page?.icon">{{page?.title}}</span>
		<ui-tooltip [title]="page?.title"></ui-tooltip>
	`
})
export class NavPage implements OnChanges
{
	@Input() page:NavPageInterface;
	
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
	id?:string
	is?:string
	path?:string
	title?:string
	icon?:string
	isActive?:boolean
	
	nav?:NavInterface
}