import {Component, ElementRef} from "angular2/core"
import {NotifyService} from "./notify-service"
import {MessageDefinition} from "./message-definition"
import {Block} from "../block/block"

@Component({
	selector: "ui-notification-outlet",
	directives: [Block],
	template: `
		<ui-block *ngFor="let message of messages"
			[z]="2" 
			[is]="message.is"
			[class.incoming]="message.incoming"
			[class.outgoing]="message.outgoing"
		>
			<section>
				<p>{{message.body}}</p>
			</section>
		</ui-block>
	`,
	styles: [`
		:host > ui-block {
			min-width: 200px;
			transform: translateY(50px);
			opacity: 0;
			margin-bottom: 20px;
		}
		:host > ui-block.incoming {
			transform: translateY(0);
			opacity: 1;
		}
		:host > ui-block.outgoing {
			transform: translateY(0) translateX(50px);
		}
	`]
})
export class NotificationOutlet
{
	messages:MessageDefinition[] = [];
	
	constructor(notifyService:NotifyService) {
		notifyService.subscribe(
			(message:MessageDefinition) => {
				this.messages.push(message);
				this.setup(message);
			}
		);
	}
	
	private setup(message:MessageDefinition) {
		message.is = message.is || "dark";
		
		setTimeout(() => {
			message.incoming = true;
		});
		
		setTimeout(() => {
			message.incoming = false;
			message.outgoing = true;
			
			setTimeout(() => {
				let index = this.messages.indexOf(message);
				this.messages.splice(index, 1);
			}, 300);
		}, message.duration || 3000);
	}
}