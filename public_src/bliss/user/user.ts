import {Injectable} from "angular2/core"

@Injectable()
export class User
{
	public id:number
	public email:string = ""
	private password:string = ""
	public displayName:string = ""
	public isActive:boolean
	public created:number
	public updated:number
	
	constructor(displayName:string = "") {
		this.displayName = displayName;
	}
}