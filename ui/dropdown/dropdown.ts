import {Component, Input, Output, EventEmitter} from "angular2/core"

@Component({
	selector: "ui-dropdown",
	styleUrls: ["./bliss/ui/dropdown/dropdown.css"],
	template: `
		<ng-content></ng-content>
		<i class="arrow"></i>
		<div class="content" (click)="onContentClick()">
			<ng-content select="[dropdown-content]"></ng-content>
		</div>
	`,
	host: {
		"[class.open]": "isOpen",
		"(click)": "toggleContent($event)"
	}
})
export class Dropdown
{
	private ignoreClick:boolean = false;
	
	@Input() isOpen:boolean = false;
	
	@Output() open:EventEmitter<any> = new EventEmitter<any>();
	@Output() close:EventEmitter<any> = new EventEmitter<any>();
	
	handleEvent(e:MouseEvent) {
		switch (e.type) {
			case "click":
				this.handleDocClick();
				break;
		}
	}
	
	toggleContent(e:MouseEvent) {
		if (this.isOpen) {
			if (!this.ignoreClick) {
				this.closeContent();
			} else {
				this.ignoreClick = true;
			}
		} else {
			this.ignoreClick = true;
			this.openContent();
		}
	}
	
	openContent() {
		this.isOpen = true;
		this.open.emit(null);
		
		document.addEventListener("click", this);
	}
	
	closeContent() {
		this.ignoreClick = false;
		this.isOpen = false;
		this.close.emit(null);
		
		document.removeEventListener("click", this);
	}
	
	private onContentClick() {
		this.ignoreClick = true;
	}
	
	private handleDocClick() {
		if (!this.ignoreClick) {
			this.closeContent();
		} else {
			this.ignoreClick = false;
		}
	}
}