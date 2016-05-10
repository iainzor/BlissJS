import {Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
	selector: "ui-modal",
	template: `
	<div class="content">
		<ng-content></ng-content>
	</div>
	<div class="backdrop" (click)="_close()"></div>
	`,
	styleUrls: ["./bliss/ui/modal/modal.css"],
	host: {
		"[class.open]": "open"
	}
})
export class Modal
{
	@Input() open:boolean = false;
	@Output() openChange:EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() close:EventEmitter<Modal> = new EventEmitter<Modal>();
	
	_close() {
		this.open = false;
		
		this.close.emit(this);
		this.openChange.emit(this.open);
	}
}