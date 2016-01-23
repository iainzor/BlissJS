export interface PageInterface
{
	id:string
	is:string
	isActive:boolean
	isVisible:boolean
	order:number
	path:string
	target:string
	title:string
	pages:Array<PageInterface>
}