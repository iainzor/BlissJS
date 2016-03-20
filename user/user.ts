import {UserRole} from "./user-role"

export class User implements UserInterface
{
	public id:number = 0
	public email:string = null
	public password:string = null
	public username:string = null
	public displayName:string = null
	public isActive:boolean = false
	public created:number
	public updated:number
	
	public role:UserRole
}

export interface UserInterface
{
	id?:Number
	email?:string
	username?:string
	displayName?:string
}