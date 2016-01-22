import {User} from "./user"

export class UserSession 
{
	public id:string
	public isValid:boolean = false
	public userId:number
	public created:number
	public user:User = new User()
}