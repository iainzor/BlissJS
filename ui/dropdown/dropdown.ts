import {Component, Input, Output, EventEmitter} from "angular2/core"

@Component({
	selector: "ui-dropdown",
	styleUrls: ["./bliss/ui/dropdown/dropdown.css"],
	template: `
		<ng-content></ng-content>
		
		<i 	class="arrow"
			[style.border-right-color]="arrowColor"
			[style.border-bottom-color]="arrowColor"
		></i>
		
		<div 	class="content" 
				[style.left]="leftPosition"
				[style.right]="rightPosition"
				(click)="onContentClick()"
		>
			<ng-content select="[dropdown-content]"></ng-content>
		</div>
	`,
	host: {
		"[class.open]": "open",
		"(click)": "toggleContent($event)"
	}
})
export class Dropdown
{
	private ignoreClick:boolean = false;
	
	@Input() arrowColor:string = "#fff";
	@Input() position:string = "right";
	
	@Input() open:boolean = false;
	@Output() openChange:EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() close:EventEmitter<any> = new EventEmitter<any>();
	
	get leftPosition() : string {
		return this.position === "left" ? "0" : null;
	}
	
	get rightPosition() : string {
		return this.position === "right" ? "0" : null;
	}
	
	handleEvent(e:MouseEvent) {
		switch (e.type) {
			case "click":
				this.handleDocClick();
				break;
		}
	}
	
	toggleContent(e:MouseEvent) {
		if (this.open) {
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
		this.open = true;
		this.openChange.emit(this.open);
		
		document.addEventListener("click", this);
	}
	
	closeContent() {
		this.ignoreClick = false;
		this.open = false;
		this.openChange.emit(this.open);
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