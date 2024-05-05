interface AppState {
    data: any; // In this case we have to use any since you can store literally anything
}

abstract class Memento {
    protected state: AppState;

    constructor(state: AppState) {
        this.state = state;
    }

    getState(): AppState {
        return this.state;
    }
}

class ConcreteMemento extends Memento {
    getState(): AppState {
        return super.getState();
    }
}

class Originator {
    private state: AppState;

    constructor(state: AppState) {
        this.state = state;
    }

    save(): Memento {
        return new ConcreteMemento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
    }
}


export class CareTaker {
    private originator: Originator;
    private mementos: Memento[] = [];

    constructor(originator: Originator, mementos?: Memento[]) {
        this.originator = originator;
        if(mementos) {
            this.mementos = mementos;
        }
    }

    restoreLastMemento() {
        if (this.mementos.length === 0) return;

        const memento = this.mementos.pop();
        this.originator.restore(memento);
    }

    saveMemento() {
        this.mementos.push(this.originator.save());
    }
}

// using this pattern

const state: AppState = {
    data: "user_details"
};

const originator = new Originator(state);

const caretaker = new CareTaker(originator);

console.log(`Originator Data: ${originator.save().getState().data}`);

state.data = "user_names";

caretaker.saveMemento();
caretaker.restoreLastMemento();

console.log(`Restored data: ${originator.save().getState().data}`);
