import {Component} from "@angular/core"
import {Dropdown} from "../dropdown/dropdown"

@Component({
	selector: "ui-more-menu",
	template: `
		<ui-dropdown [(open)]="open">
			<ul class="nav nav-pills">
				<li class="nav-item">
					<a href="javascript:void(0)" class="nav-link nav-icon-link" [class.active]="open">
						<i class="material-icons">more_vert</i>
					</a>
				</li>
			</ul>
			<div class="more" dropdown-content>
				<ng-content></ng-content>
			</div>
		</ui-dropdown>
	`,
	styles: [`
		:host > ui-dropdown .more { min-width: 200px; }
	`],
	directives: [
		Dropdown
	]
})
export class MoreMenuComponent
{
	open:boolean = false;

	toggle(e:MouseEvent) {
		e.preventDefault();
		//e.stopPropagation();
		this.open = !this.open;
	}
}