import {Pipe} from "@angular/core"

@Pipe({
	name: "byteFormat"
})
export class ByteFormatPipe
{
	transform(value:number, args: any[]) : string {
		let kb = 1024;
		let mb = kb * 1024;
		let gb = mb * 1024;
		
		if (value > gb) {
			return (value / gb).toFixed(2) +" GB";
		}
		if (value > mb) {
			return (value / mb).toFixed(2) +" MB";
		}
		if (value > kb) {
			return (value / kb).toFixed(2) +" kB";
		}
		return value.toFixed(0) +" bytes";
	}
}
