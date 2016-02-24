import "rxjs/add/operator/map"
import {Component, Output, EventEmitter} from "angular2/core"
import {NgForm} from "angular2/common"
import {Http} from "angular2/http"
import {Bliss} from "../../bliss"
import {User} from "../user"
import {UserSession} from "../user-session"

@Component({
	selector: "user-sign-in-form",
	template: `
		<form (submit)="submit()">
			<div class="form-group">
				<label>Email Address</label>
				<input class="form-control" type="email" [(ngModel)]="user.email" required>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input class="form-control" type="password" [(ngModel)]="user.password" required>
			</div>
			<div class="form-group">
				<input class="btn btn-primary btn-block" type="submit" value="Sign In">
			</div>
		</form>
	`,
	directives: [NgForm]
})
export class SignInForm
{
	@Output() success = new EventEmitter<User>()
	
	user:User = new User();
	
	constructor(private http:Http, bliss:Bliss) {}
	
	submit() {
		this.http.post("sign-in.json", JSON.stringify(this.user))
			.map(res => res.json())
			.subscribe(
				(session:UserSession) => {
					for (var i in session.user) {
						this.user[i] = session.user[i];
					}
					this.success.emit(this.user);
				}
			);
	}
}