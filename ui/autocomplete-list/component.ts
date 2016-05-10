import "rxjs/add/operator/debounceTime"
import {Component, Input, Output, EventEmitter, ElementRef} from "@angular/core"
import {Control} from "@angular/common"
import {Block} from "../block/block"

@Component({
	selector: "autocomplete-list",
	templateUrl: "./bliss/ui/autocomplete-list/template.html",
	styleUrls: ["./bliss/ui/autocomplete-list/styles.css"],
	directives: [Block],
	host: {
		"[class.focused]": "isFocused"
	}
})
export class AutocompleteList
{
	private _resultMap = {};
	private _results:any[];
	
	term:string;
	termControl:Control = new Control();
	selected:number = 0;
	isFocused:boolean = false;
	
	@Input() labelGenerator:Function;
	@Input() placeholder:string;
	
	@Input() list:any[];
	@Output() listChange:EventEmitter<any[]> = new EventEmitter<any[]>();
	@Output() search:EventEmitter<string> = new EventEmitter<string>();
	
	@Input() set results(results:any[]) {
		if (results) {
			this._results = results.filter((result) => {
				let label = this.resultLabel(result);
				if (this._resultMap[label]) {
					return false;
				}
				return true;
			});
		}
	}
	
	constructor(private elRef:ElementRef) {
		this.termControl
			.valueChanges
			.debounceTime(300)
			.subscribe(
				() => {
					if (!this.term) {
						this._results = null;
					} else {
						this.search.emit(this.term);
					}
				}
			);
	}
	
	get input() : HTMLInputElement {
		return this.elRef.nativeElement.querySelector("input");
	}
	
	resultLabel(result:any) {
		if (!this.labelGenerator) {
			throw("No label generator was provided");
		}
		
		return this.labelGenerator(result);
	}
	
	add(e:Event, result:any) {
		if (e) {
			e.preventDefault();
		}
		
		let label = this.resultLabel(result);
		let index = this._results.indexOf(result);
		
		if (!this._resultMap[label]) {
			this._resultMap[label] = result;
			this._results.splice(index, 1);
			
			this.list.push(result);
			this.listChange.emit(this.list);
			
			if (index > 0) {
				this.selected = index - 1;
			}
		}
	}
	
	remove(e:Event, result:any) {
		e.preventDefault();
		
		let index = this.list.indexOf(result);
		let key = this.resultLabel(result);
		if (index > -1) {
			this.list.splice(index, 1);
			this._results.push(result);
			this.listChange.emit(this.list);
			
			delete this._resultMap[key];
		}
	}
	
	navigate(amount:number) {
		let max = this._results.length - 1;
		
		this.selected += amount;
		if (this.selected < 0) {
			this.selected = max;
		} else if (this.selected > max) {
			this.selected = 0;
		}
	}
	
	select() {
		let result = this._results[this.selected];
		if (result) {
			this.add(null, result);
		}
	}
	
	onKeyDown(e:KeyboardEvent) {
		switch (e.keyCode) {
			// Down Arrow
			case 40:
				this.navigate(1);
				break;
			// Up Arrow
			case 38:
				this.navigate(-1);
				break;
			// Enter
			case 13:
				this.select();
				break;
			// Escape
			case 27:
				this.isFocused = false;
				this.input.blur();
				break;
		}
	}
	
	onFocus() {
		this.isFocused = true;
	}
	
	onBlur() {
		setTimeout(() => {
			this.isFocused = false;
		}, 100);
	}
}