import {Component, ElementRef, ViewQuery, QueryList, OnChanges, OnInit, OnDestroy} from "angular2/core"
import {NgIf} from "angular2/common"
import {Tooltip} from "../tooltip/tooltip"
import {Block} from "../block/block"
import {Theme} from "../theme"

@Component({
	selector: "ui-fab",
	styleUrls: ["./bliss/ui/fab/fab.css"],
	inputs: ["title", "icon", "bottom", "top", "left", "right", "z", "isVisible"],
	directives: [Tooltip, Block, NgIf],
	host: {
		"[class.visible]": "isVisible && isReady",
		"(mouseenter)": "onMouseEnter()",
		"(mouseleave)": "onMouseLeave()"
	},
	template: `
	<ui-block 	[z]="z" 
				[style.background-color]="backgroundColor" 
				[style.color]="iconColor"
				[style.top]="top ? top+'px' : auto"
				[style.left]="left ? left+'px' : auto"
				[style.bottom]="bottom ? bottom+'px' : auto"
				[style.right]="right ? right+'px' : auto"
	>
		<ui-tooltip *ngIf="title" [title]="title"></ui-tooltip>
		<i class="material-icons">{{icon}}</i>
	</ui-block>
	`
})
export class Fab implements OnChanges, OnInit, OnDestroy
{
	isReady:boolean = false;
	isVisible:boolean = true;
		
	z:number = 2;
	
	top:number;
	bottom:number;
	left:number;
	right:number;
	
	backgroundColor:string;
	iconColor:string;
	
	constructor(private theme:Theme, private _elRef:ElementRef) {
		this.backgroundColor = theme.accentBackgroundColor;
		this.iconColor = theme.accentTextColor;
	}
	
	ngOnInit() {
		this.position();
		
		setTimeout(() => {
			this.isReady = true;
		}, 300);
		
		window.addEventListener("resize", this.position.bind(this));
	}
	
	ngOnDestroy() {
		window.removeEventListener("resize", this.position.bind(this));
	}
	
	ngOnChanges() {
		this.position();
	}
	
	position() {
		/*
		let el:HTMLElement = this._elRef.nativeElement;
		let fab = <HTMLElement> el.querySelector("ui-block");
		let elCoords = el.getBoundingClientRect();
		let parent = el.parentElement;
		let parentCoords = parent.getBoundingClientRect();
		let top;
		let left;
		
		if (typeof this.top !== "undefined") {
			fab.style.top = this.top +"px";
		} else if (typeof this.bottom !== "undefined") {
			fab.style.bottom = this.bottom +"px";
		}
		
		if (typeof this.left !== "undefined") {
			fab.style.left = this.left +"px";
		} else if (typeof this.right !== "undefined") {
			fab.style.right = this.right +"px";
		}
		*/
	}
	
	onMouseEnter() {
		this.z += 2;
	}
	
	onMouseLeave() {
		this.z -= 2;
	}
}