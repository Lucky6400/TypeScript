export interface Command {
    execute(): void;
}

export interface Receiver {
    methodA(): void;
    methodB(): void;
}

export interface CommandHandler {
    handle(command: Command): void;
}