import {Component, Input, ElementRef} from "angular2/core"
import {NgIf} from "angular2/common"
import {Layout} from "../layout/layout"
import {LayoutSection} from "../layout/layout-section"

@Component({
	selector: "ui-tooltip",
	templateUrl: "./bliss/ui/tooltip/tooltip.html",
	styleUrls: ["./bliss/ui/tooltip/tooltip.css"],
	directives: [Layout, LayoutSection],
	host: {
		"[class.open]": "open",
	}
})
export class Tooltip
{
	@Input() title:string;
	@Input() open:boolean;
	
	constructor(private _elRef:ElementRef) {
		var el = _elRef.nativeElement;
		var parent = el.parentElement;
		
		parent.addEventListener("mouseover", this._open.bind(this));
		parent.addEventListener("mouseleave", this._close.bind(this));
	}
	
	_open() {
		this.open = true;
	}
	
	_close() {
		this.open = false;
	}
}