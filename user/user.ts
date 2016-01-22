import "rxjs/add/operator/map"
import {Injectable, Injector} from "angular2/core"
import {Http} from "angular2/http"
import {UserRole} from "./user-role"

@Injectable()
export class User
{
	public id:number = 0
	public email:string = null
	private password:string = null
	public displayName:string = null
	public isActive:boolean = false
	public created:number
	public updated:number
	
	public role:UserRole
}