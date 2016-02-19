import {Component, ElementRef, Input, OnChanges, OnInit, OnDestroy} from "angular2/core"
import {NgIf} from "angular2/common"
import {Tooltip} from "../tooltip/tooltip"
import {Block} from "../block/block"

@Component({
	selector: "ui-fab",
	styleUrls: ["./bliss/ui/fab/fab.css"],
	inputs: ["title", "icon", "bottom", "top", "left", "right", "z"],
	directives: [Tooltip, Block, NgIf],
	template: `
	<ui-block [z]="z">
		<ui-tooltip *ngIf="title" [title]="title"></ui-tooltip>
		<div class="material-icons">{{icon}}</div>
	</ui-block>
	`
})
export class Fab implements OnChanges, OnInit, OnDestroy
{
	z:number = 2;
	
	top:number;
	bottom:number;
	left:number;
	right:number;
	
	constructor(private _elRef:ElementRef) {}
	
	ngOnInit() {
		window.addEventListener("resize", this.position.bind(this));
	}
	
	ngOnDestroy() {
		window.removeEventListener("resize", this.position.bind(this));
	}
	
	ngOnChanges() {
		this.position();
	}
	
	position() {
		let el:HTMLElement = this._elRef.nativeElement;
		let elCoords = el.getBoundingClientRect();
		let parent = el.parentElement;
		let parentCoords = parent.getBoundingClientRect();
		let top;
		let left;
		
		if (typeof this.top !== "undefined") {
			top = parentCoords.top + this.top;
		} else if (typeof this.bottom !== "undefined") {
			top = parentCoords.top + parentCoords.height - elCoords.width;
		}
		
		if (typeof this.left !== "undefined") {
			left = parentCoords.left + this.left;
		} else if (typeof this.right !== "undefined") {
			left = parentCoords.left + parentCoords.width - elCoords.width;
		}
		
		if (typeof top !== "undefined" || typeof left !== "undefined") {
			el.style.position = "fixed";
			el.style.top = (typeof top !== "undefined") ? top+"px" : null;
			el.style.left = (typeof left !== "undefined") ? left+"px" : null;
		} else {
			el.style.position = "relative";
		}
	}
	
	_parentEl() : HTMLElement {
		return this._elRef.nativeElement.parentNode;
	}
}