import {Component, Input, Output, EventEmitter} from "angular2/core"
import {NgForm} from "angular2/common"
import {Http} from "angular2/http"
import {User} from "./user"
import {UserSession} from "./user-session"

@Component({
	selector: "user-sign-in",
	template: `
		<h1>Please Sign In</h1>
		<form method="post" action="sign-in.json" (submit)="submit()">
			<p>
				<label>Email Address</label>
				<input type="email" [(ngModel)]="user.email" required>
			</p>
			<p>
				<label>Password</label>
				<input type="password" [(ngModel)]="user.password" required>
			</p>
			<p>
				<input type="submit" value="Sign In">
			</p>
		</form>
	`
})
export class SignInComponent
{
	@Input("user") user:User
	
	constructor(private http:Http) {}
	
	submit() {
		this.http.post("sign-in.json", JSON.stringify(this.user))
			.map(res => res.json())
			.subscribe(
				(session:UserSession) => {
					for (var i in session.user) {
						this.user[i] = session.user[i];
					}
				}
			);
	}
}