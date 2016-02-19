import {Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {User, UserInterface} from "./user"

@Injectable()
export class UserService
{
	constructor(private http:Http) {}
	
	signOut(user:User) : Promise<User> {
		var promise = new Promise<User>(
			(resolve, reject) => {
				this.http.post("sign-out.json", "")
					.map(res => res.json())
					.subscribe(
						(response:User) => {
							for (var i in response) {
								user[i] = response[i];
							}
							resolve(user);
						}
					);
			}
		);
		
		return promise;
	}
}