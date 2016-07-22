import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Theme} from "../theme"

@Component({
	selector: "ui-radio",
	template: `
		<i class="material-icons radio-checked">radio_button_checked</i>
		<i class="material-icons radio-unchecked">radio_button_unchecked</i>
	`,
	styles: [`
		:host { 
			position: relative; 
			display: inline-block;
			cursor: pointer;
			width: 24px;
			height: 24px;
		}
			:host > .material-icons { 
				visibility: hidden;
				transition: all .3s ease-in-out;
				opacity: 0;
			}
			:host(.checked) > .radio-checked,
			:host(.unchecked) > .radio-unchecked { 
				visibility: visible;
				position: absolute;
				top: 0;
				left: 0; 
				opacity: 1;
			}
	`],
	host: {
		"[class.checked]": "checked",
		"[class.unchecked]": "!checked",
		"[style.color]": "radioColor",
		"(click)": "onClick($event)"
	}
})
export class RadioComponent
{
	constructor(private theme:Theme) {}

	@Input() checked:boolean = false;
	@Output() checkedChange:EventEmitter<boolean> = new EventEmitter<boolean>();

	onClick(e:MouseEvent) {
		e.preventDefault();
		this.checked = true;
		this.checkedChange.emit(this.checked);
	}

	get radioColor() : string {
		if (this.checked) {
			return this.theme.accentColor;
		} else {
			return "#212121";
		}
	}
}