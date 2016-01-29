import {Component, Input, ElementRef} from "angular2/core"

@Component({
	selector: "ui-block",
	template: `
		<ng-content select="header"></ng-content>
		<section class="content">
			<ng-content></ng-content>
		</section>
	`,
	styleUrls: ["./bliss/ui/components/block.css"]
})
export class BlockComponent
{
	private _z:number = 1;
	
	@Input() set z(z:number) {
		this._z = z;
		this._changeZClass();
	}
	
	constructor(private _el:ElementRef) {
		this._changeZClass();
	}
	
	private _changeZClass() {
		let el:HTMLElement = this._el.nativeElement;
		let classList = Array.prototype.slice.apply(el.classList);
		
		classList.forEach((className:string) => {
			if (className.match(/^z-/)) {
				el.classList.remove(className);
			}
		});
		el.classList.add("z-"+ this._z);
	}
}