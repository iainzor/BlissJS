import {Component, Input, Output, EventEmitter} from "@angular/core"
import {NgForm} from "@angular/common"
import {Block} from "../../ui/block/block"
import {User} from "../user"
import {UserSession} from "../user-session"
import {UserService} from "../user-service"

@Component({
	selector: "user-sign-in",
	templateUrl: "./bliss/user/sign-in/sign-in.html",
	directives: [Block, NgForm],
	providers: [UserService]
})
export class SignIn 
{
	@Output() success = new EventEmitter<User>()
	@Input() user:User;
	
	constructor(private userService:UserService) {}
	
	submit() {
		this.userService.signIn(this.user).then(() => {
			this.success.emit(this.user);
		});
	}
}