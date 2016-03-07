import {Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {User, UserInterface} from "./user"
import {UserSession} from "./user-session"

@Injectable()
export class UserService
{
	constructor(private http:Http) {}
	
	signIn(user:User) : Promise<User> {
		return new Promise<User>(
			(resolve, reject) => {
				this.http.post("sign-in.json", JSON.stringify(user))
					.map(res => res.json())
					.subscribe(
						(session:UserSession) => {
							for (var i in session.user) {
								user[i] = session.user[i];
							}
							resolve(user);
						},
						(error) => {
							if (error.json) {
								reject(error.json());
							} else {
								reject(error);
							}
						}
					);
			}
		);
		
	}
	
	signOut(user:User) : Promise<boolean> {
		var promise = new Promise<boolean>(
			(resolve, reject) => {
				this.http.post("sign-out.json", "")
					.map(res => res.json())
					.subscribe(
						(response:User) => {
							for (let i in response) {
								user[i] = response[i];
							}
							resolve(true);
						},
						(error) => {
							if (error.json) {
								reject(error.json());
							} else {
								reject(error);
							}
						}
					);
			}
		);
		
		return promise;
	}
	
	signUp(user:User) : Promise<boolean> {
		return new Promise<boolean>(
			(resolve, reject) => {
				this.http
					.post("sign-up.json", JSON.stringify({
						email: user.email,
						password: user.password,
						displayName: user.displayName
					}))
					.map(res => res.json())
					.subscribe(
						(response) => {
							if (response.result && response.result === "error") {
								reject(response);
							} else {
								for (let i in response) {
									user[i] = response[i];
								}
								resolve(true);
							}
						},
						(error) => {
							reject(
								error.json ? error.json() : error
							);
						}
					);
			}
		);
	}
}