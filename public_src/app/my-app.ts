import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Http, Response} from "angular2/http"
import {User} from "../bliss/user/user"
import {SignInComponent} from "../bliss/user/sign-in-form"

@Component({
	selector: "my-app",
	template: `
	<div *ngIf="isReady">
		{{user.email}}
		<div *ngIf="user.isActive">
			Hello {{user.displayName}}
		</div>
		<div *ngIf="!user.isActive">
			<user-sign-in [(user)]="user"></user-sign-in>
		</div>
	</div>
	`,
	directives: [CORE_DIRECTIVES, SignInComponent]
})
export class MyApp
{
	isReady:boolean = false
	user:User
	
	constructor(http:Http) {
		http.get("app.json").map(res => res.json()).subscribe(
			(data) => {
				this.user = data.user;
				this.isReady = true;
			}
		);
	}
}