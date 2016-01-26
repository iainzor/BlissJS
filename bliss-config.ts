import {User} from "./user/user"

export class BlissConfig
{
	name:string
	pages:Array<Object>
	router:Object
	startTime:number
	user:User = new User()
}