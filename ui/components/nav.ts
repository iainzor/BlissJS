import {Component, Input} from "angular2/core"

@Component({
	selector: "ui-nav",
	template: `[NAV HERE]`
})
export class NavComponent
{
	@Input() pages:Array<Object>
}