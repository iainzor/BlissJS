import "rxjs/add/operator/debounceTime"

import {Component, Input, Output, EventEmitter, OnInit, OnDestroy} from "@angular/core"
import {FormControl, FormControlDirective} from "@angular/forms"
import {AutoCompleteResult} from "./autocomplete-result"
import {AutoCompleteResultsComponent} from "./autocomplete-results.component"
import {Block} from "../block/block"
import {Spinner} from "../spinner/spinner"

@Component({
	selector: "autocomplete",
	templateUrl: "./bliss/ui/autocomplete/autocomplete.component.html",
	styleUrls: ["./bliss/ui/autocomplete/autocomplete.component.css"],
	directives: [
		FormControlDirective,
		AutoCompleteResultsComponent,
		Block,
		Spinner
	],
	host: {
		"[class.focused]": "focused"
	}
})
export class AutoCompleteComponent implements OnInit
{
	query:string;
	queryControl:FormControl = new FormControl();
	focused:boolean = false;
	loading:boolean = false;
	resultList:AutoCompleteResult[];

	@Input() placeholder:string;
	@Output() queryChange:EventEmitter<string> = new EventEmitter<string>();
	@Output() resultSelect:EventEmitter<AutoCompleteResult> = new EventEmitter<AutoCompleteResult>();
	
	@Input() set results(results:AutoCompleteResult[]) {
		this.resultList = results;
		
		window.setTimeout(() => {
			this.loading = false;
		}, 100);
	}

	ngOnInit() {
		this.queryControl
			.valueChanges
			.debounceTime(300)
			.subscribe(() => {
				this.emit();
			});
	}

	emit() {
		if (!this.query) {
			this.results = null;
		} else {
			this.loading = true;
			this.queryChange.emit(this.query);
		}
	}

	onResultSelect(result:AutoCompleteResult) {
		this.resultSelect.emit(result);
	}

	onFocus() {
		this.focused = true;
	}

	onBlur() {
		window.setTimeout(() => {
			this.focused = false;
		}, 100);
	}
}