import {Component, Input, Output, EventEmitter} from "angular2/core"
import {User} from "../user"
import {UserService} from "../user-service"

@Component({
	selector: "user-sign-out",
	template: `
		<button (click)="signOut()">Sign Out</button>
	`,
	providers: [UserService]
})
export class SignOutComponent
{
	@Input() user:User;
	@Output() success = new EventEmitter<User>();
	
	constructor(private userService:UserService) {}
	
	signOut() {
		this.userService.signOut(this.user).then(() => {
			this.success.emit(this.user);
		});
	}
}