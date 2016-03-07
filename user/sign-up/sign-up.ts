import {Component, Input, Output, EventEmitter} from "angular2/core"
import {NgForm} from "angular2/common"
import {Block} from "../../ui/block/block"
import {User} from "../user"
import {UserService} from "../user-service"

@Component({
	selector: "user-sign-up",
	templateUrl: "./bliss/user/sign-up/sign-up.html",
	directives: [Block, NgForm],
	providers: [UserService]
})
export class SignUp
{
	@Input() user:User;
	@Output() success:EventEmitter<User> = new EventEmitter<User>();
	
	constructor(private userService:UserService) {}
	
	submit() {
		this.userService.signUp(this.user).catch((error) => {
			console.log(error);	
		});
	}
}