import {Component, Input} from "angular2/core"
import {COMMON_DIRECTIVES} from "angular2/common"
import {PageInterface} from "../../page/page-interface"

@Component({
	selector: "ui-nav",
	template: `
		<ul>
			<li *ngFor="#page of visiblePages">
				<a href="{{page.path}}" title="{{page.title}}">
					{{page.title}}
				</a>
			</li>
		</ul>
	`,
	directives: [COMMON_DIRECTIVES]
})
export class NavComponent
{
	public visiblePages:Array<PageInterface> = [];
	
	@Input() set pages(pages:Array<PageInterface>) {
		this.visiblePages = [];
		
		if (pages) {
			this.visiblePages = pages.filter((page) => {
				return page.isVisible;
			});
		}
	}
}