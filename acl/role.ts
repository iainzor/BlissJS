import {Permission} from "./permission"

export class Role 
{
	public name:string = null
	public allowByDefault:boolean = false
	public permissions:Array<Permission> = []
}