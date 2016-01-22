import {Component, Input} from "angular2/core"
import {User} from "../user"
import {UserService} from "../services/user"

@Component({
	selector: "user-sign-out",
	template: `
		<button (click)="signOut()">Sign Out</button>
	`,
	providers: [UserService]
})
export class SignOutComponent
{
	@Input() user:User
	
	constructor(private userService:UserService) {}
	
	signOut() {
		this.userService.signOut(this.user);
	}
}