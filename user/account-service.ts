import {Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {User, UserInterface} from "./user"

@Injectable()
export class AccountService
{
	constructor(private http:Http) {}
	
	changePassword(currentPassword:string, newPassword:string, confirmPassword:string) : Promise<ChangePasswordResponse> {
		let body = JSON.stringify({
			currentPassword: currentPassword,
			newPassword: newPassword,
			confirmPassword: confirmPassword
		});
		
		return new Promise<ChangePasswordResponse>(
			(resolve, reject) => {
				this.http
					.post("account/change-password.json", body)
					.map(res => res.json())
					.subscribe(
						(response) => {
							resolve(response);
						},
						(error) => {
							reject(error);
						}
					);
			}
		)
	}
}

export class ChangePasswordResponse
{
	result:string;
	form:any;
}