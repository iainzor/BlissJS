import {Component, Input, ElementRef} from "@angular/core"

@Component({
	selector: "ui-layout-section",
	template: "<ng-content></ng-content>",
	styleUrls: ["./bliss/ui/layout/layout-section.css"],
	host: {
		"[style.flex-grow]": "grow",
		"[style.flex-shrink]": "shrink"
	}
})
export class LayoutSection
{
	@Input() grow:number;
	@Input() shrink:number;
	
	constructor(private _elRef:ElementRef) {}
}