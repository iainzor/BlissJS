import {Component, Input, ElementRef} from "angular2/core"

@Component({
	selector: "ui-layout-section",
	template: "<ng-content></ng-content>",
	styleUrls: ["./bliss/ui/components/layout-section.css"]
})
export class LayoutSectionComponent
{
	@Input() set grow(size:number) {
		let el:HTMLElement = this._elRef.nativeElement;
		
		el.style.flexGrow = size.toString();
	}
	
	constructor(private _elRef:ElementRef) {}
}