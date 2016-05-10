import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core"

@Component({
	selector: "date-picker",
	template: `
		<input type="datetime-local" 
			   class="form-control"
			   [value]="dateString"
			   (change)="onDateChange($event.target.value)">
	`
})
export class DatePicker implements OnChanges
{
	@Input() date:Date;
	@Output() dateChange:EventEmitter<Date> = new EventEmitter<Date>();
	
	dateString:string;
	
	constructor() {
		this.date = new Date();
	}
	
	ngOnChanges() {
		if (this.date) {
			 this.dateString 	= (this.date.getFullYear().toString() + '-' 
								+ ("0" + (this.date.getMonth() + 1)).slice(-2) + '-' 
								+ ("0" + (this.date.getDate())).slice(-2))
								+ 'T' + this.date.toTimeString().slice(0,5);
		}
	}
	
	onDateChange(value:string) {
		if (value) {
			value = value.replace("T", "-");
			let parts = value.split("-");
			let timeParts = parts[3].split(":");
			
			this.dateString = value;
			this.date = new Date(
				parseInt(parts[0]), 
				parseInt(parts[1])-1, 
				parseInt(parts[2]), 
				parseInt(timeParts[0]), 
				parseInt(timeParts[1])
			);
			this.dateChange.emit(this.date);
		} else {
			this.dateChange.emit(null);
		}
	}
}