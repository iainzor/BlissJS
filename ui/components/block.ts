import {Component, Input, OnChanges, ElementRef} from "angular2/core"

@Component({
	selector: "ui-block",
	styleUrls: ["./bliss/ui/components/block.css"],
	template: `
		<ng-content select="header"></ng-content>
		<section class="content">
			<ng-content></ng-content>
		</section>
	`
})
export class BlockComponent implements OnChanges
{
	@Input() z:number;
	
	constructor(private _elRef:ElementRef) {}
	
	ngOnChanges(changes) {
		if (changes.z) {
			this._changeZ(changes.z.currentValue);
		}
	}
	
	private _changeZ(z:number) {
		let el:HTMLElement = this._elRef.nativeElement;
		let classList = Array.prototype.slice.apply(el.classList);
		
		classList.forEach((className:string) => {
			if (className.match(/^z-/)) {
				el.classList.remove(className);
			}
		});
		el.classList.add("z-"+ z);
	}
}