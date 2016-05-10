import {Injectable} from "@angular/core"
import {Http, URLSearchParams} from "@angular/http"
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
	
	getSettings(moduleName:string) : Promise<{[key:string]:any}> {
		let search = new URLSearchParams();
		search.set("moduleName", moduleName);
		
		return new Promise<{[key:string]:any}>(
			(resolve, reject) => {
				this.http
					.get("account/settings.json", {search:search})
					.map(res => res.json())
					.subscribe(
						(response) => {
							resolve(response);
						},
						(error) => {
							reject(error.json ? error.json() : error);
						}
					);
			}
		);
	}
	
	saveSettings(moduleName:string, settings:{[key:string]:any}) : Promise<boolean> {
		return new Promise<boolean>(
			(resolve, reject) => {
				this.http
					.post("account/settings.json", JSON.stringify(settings))
					.map(res => res.json())
					.subscribe(
						() => {
							resolve(true)
						},
						(error) => {
							reject(error.json ? error.json() : error);
						}
					);
			}
		);
	}
}

export class ChangePasswordResponse
{
	result:string;
	form:any;
}