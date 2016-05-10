import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core"
import {NgForm} from "@angular/common"
import {Block} from "../../ui/block/block"
import {User} from "../user"
import {UserService} from "../user-service"

@Component({
	selector: "user-sign-up",
	templateUrl: "./bliss/user/sign-up/sign-up.html",
	directives: [Block, NgForm],
	providers: [UserService]
})
export class SignUp implements OnChanges
{
	@Input() user:User;
	@Output() success:EventEmitter<User> = new EventEmitter<User>();
	
	fields:FieldDefinition[] = [];
	
	constructor(private userService:UserService) {}
	
	ngOnChanges(changes) {
		if (changes.user) {
			this.generate(changes.user.currentValue);
		}
	}
	
	generate (user:User) {
		this.fields = [{
			type: "email",
			label: "Email Address",
			key: "email"
		}, {
			label: "Username",
			key: "username"
		}, {
			type: "password",
			label: "Password",
			key: "password"
		}];
	}
	
	submit() {
		this.userService.signUp(this.user).catch((error) => {
			if (error.errors) {
				this.fields.forEach((field) => {
					if (error.errors[field.key]) {
						field.error = error.errors[field.key];
					}
				});
			}
		});
	}
}

interface FieldDefinition
{
	type?:string
	key:string
	label:string
	error?:string
}