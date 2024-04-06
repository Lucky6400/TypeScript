import { Command, CommandHandler, Receiver } from "./typings";

class ConcreteCommandA implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodA();
    }
}

class ConcreteCommandB implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodB();
    }
}

class ConcreteCommandHandler implements CommandHandler {
    private commands: Command[] = [];

    handle(command: Command) {
        command.execute();
        this.commands.push(command);
    }

}

class ConcreteReceiver implements Receiver {
    methodA() {
        console.log("Method A of receiver");
    }
    methodB() {
        console.log("Method B of receiver");
    }

}

const handler = new ConcreteCommandHandler();
const receiver = new ConcreteReceiver();
handler.handle(new ConcreteCommandA(receiver)); /* logs Called method A */
handler.handle(new ConcreteCommandB(receiver)); /* logs Called method B */