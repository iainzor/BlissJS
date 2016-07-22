import {Component, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy} from "@angular/core"
import {AutoCompleteResult} from "./autocomplete-result"
import {Block} from "../block/block"

@Component({
	selector: "autocomplete-results",
	templateUrl: "./bliss/ui/autocomplete/autocomplete-results.component.html",
	directives: [
		Block
	]
})
export class AutoCompleteResultsComponent implements OnInit, OnDestroy, EventListenerObject
{
	@Input() input:HTMLInputElement;
	@Input() results:AutoCompleteResult[];
	@Output() resultSelect:EventEmitter<AutoCompleteResult> = new EventEmitter<AutoCompleteResult>();

	active:number = 0;

	ngOnInit() {
		if (this.input) {
			this.input.addEventListener("keydown", this);	
		}
	}

	ngOnDestroy() {
		if (this.input) {
			this.input.removeEventListener("keydown", this);
		}
	}

	handleEvent(e:Event) {
		switch (e.type) {
			case "keydown":
				this.handleKeyDown(<KeyboardEvent> e);
				break;
		}
	}

	handleKeyDown(e:KeyboardEvent) {
		switch (e.keyCode) {
			case 40:
				e.preventDefault();
				this.step(1);
				break;
			case 38:
				e.preventDefault();
				this.step(-1);
				break;
			case 13:
				e.preventDefault();
				this.selectActive();
				break;
		}
	}

	onResultClick(e:MouseEvent, result:AutoCompleteResult) {
		e.preventDefault();
		this.resultSelect.emit(result);
	}

	step(amount:number) {
		let maxIndex = this.results.length - 1;
		this.active += amount;
		
		if (this.active < 0) {
			this.active = maxIndex;
		} else if (this.active > maxIndex) {
			this.active = 0;
		}
	}

	selectActive() {
		let result = this.results[this.active];

		if (result) {
			this.resultSelect.emit(result);
		}
	}
}