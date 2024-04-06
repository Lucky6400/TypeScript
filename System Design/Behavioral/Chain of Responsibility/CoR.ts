export interface IRequest {
    getOrigin(): string;
    getParams(): Map<string, string>;
}

export class HTTPRequest implements IRequest {

    constructor(private origin: string, private params:
        Map<string, string>) {

    }

    getOrigin(): string {
        return this.origin;
    }

    getParams(): Map<string, string> {
        return this.params;
    }
}

/*
The concrete HTTPRequest class represents the object that we pass along the
Chain of Responsibility as a handler parameter. The actual chain is defined in the
RequestHandler interface.
*/

export abstract class RequestHandler {

    constructor(protected next: RequestHandler | null) {}

    handle(request: IRequest){
        if(this.next !== null) {
            this.next.handle(request);
        }
    }
}

// concrete implementations of above class

export class MessageHandler extends RequestHandler {
    handle(request: IRequest): void {
        console.log(`Message handler triggered by ${request.getOrigin()}`)

        if(this.next !== null) this.next.handle(request);
    }
}

export class NotificationHandler extends RequestHandler {
    handle(request: IRequest): void {
        console.log(`Notification handler triggered by ${request.getOrigin()}`)

        if(this.next !== null) {
            this.next.handle(request);
        }
    }
}

const httpReq = new HTTPRequest('testhost', new Map().set("test", "testVal"))

new MessageHandler(new NotificationHandler(null)).handle(httpReq);