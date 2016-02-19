import {Component, Input, ElementRef, OnInit, OnDestroy, OnChanges} from "angular2/core"
import {NgIf} from "angular2/common"
import {Layout} from "../layout/layout"
import {LayoutSection} from "../layout/layout-section"

@Component({
	selector: "ui-tooltip",
	template: "{{title}}",
	styleUrls: ["./bliss/ui/tooltip/tooltip.css"],
	directives: [Layout, LayoutSection],
	inputs: ["title", "open"],
	host: {
		"[class.open]": "open"
	}
})
export class Tooltip implements OnInit, OnDestroy, OnChanges
{
	open:boolean = false;
	title:string;
	
	constructor(private _elRef:ElementRef) {}
	
	ngOnInit() {
		let parent = this._parentEl();
		
		parent.addEventListener("mouseover", this._open.bind(this));
		parent.addEventListener("mouseleave", this._close.bind(this));
	}
	
	ngOnDestroy() {
		let parent = this._parentEl();
		
		parent.removeEventListener("mouseover", this._open.bind(this));
		parent.removeEventListener("mouseleave", this._close.bind(this));
	}
	
	ngOnChanges(changes) {
		if (changes.title) {
			setTimeout(this.position.bind(this));
		}
	}
	
	position() {
		let el:HTMLElement = this._elRef.nativeElement;
		let elCoords = el.getBoundingClientRect();
		let parent = el.parentElement;
		let parentCoords = parent.getBoundingClientRect();
		let docCoords = document.body.getBoundingClientRect();
		
		let width = elCoords.left + el.clientWidth + parentCoords.width + 10;
		let diff = width - docCoords.width;
		
		if (diff > 0) {
			el.style.transform = "translateX(-"+ (el.clientWidth+10) +"px)";
			el.style.transformOrigin = "right center";
		} else {
			el.style.transform = "translatX("+ (parentCoords.width+10) +"px)";
			el.style.transformOrigin = "left center";
		}
	}
	
	_parentEl() : HTMLElement {
		return this._elRef.nativeElement.parentNode;
	}
	
	_open() {
		this.open = true;
		this.position();
	}
	
	_close() {
		this.open = false;
	}
}