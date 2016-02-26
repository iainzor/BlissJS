export interface MessageDefinition
{
	body:string;
	is?:string;
	duration?:number;
	
	incoming?:boolean;
	outgoing?:boolean;
}