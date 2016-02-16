import {Component, Input, ElementRef} from "angular2/core"

@Component({
	selector: "ui-block",
	styleUrls: ["./bliss/ui/block/block.css"],
	inputs: [
		"is",
		"z"
	],
	template: `
		<ng-content select="header"></ng-content>
		<section class="content" [class.compact]="compact!==false">
			<ng-content></ng-content>
		</section>
		<ng-content select="footer"></ng-content>
	`
})
export class Block
{
	private _el:HTMLElement;
	private _isClass:string;
	private _zClass:string;
	
	@Input() compact:boolean = false;
	
	constructor(private _elRef:ElementRef) {
		this._el = _elRef.nativeElement;
		this.z = 1;
	}
	
	set is(is:string) {
		let classList = this._el.classList;
		
		if (this._isClass) {
			classList.remove(this._isClass);
		}
		if (is) {
			this._isClass = "is-"+ is;
			classList.add(this._isClass);
		}
	}
	
	set z(z:number) {
		let classList = this._el.classList;
		
		if (this._zClass) {
			classList.remove(this._zClass);
		}
		if (z) {
			this._zClass = "z-"+ z;
			classList.add(this._zClass);
		}
	}
}