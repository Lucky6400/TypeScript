export interface Store {
    save(value: string): void;
}

export class DocStore implements Store {
    save(value: string): void {
        console.log(`${value} is saved`);
    }
}

export class ProxyStore implements Store {
    private docStore: DocStore;

    constructor(docStore?: DocStore) {

    }

    save(value: string): void {
        if(!this.docStore) {
            // lazy initialization
            this.docStore = new DocStore();
        }

        this.docStore.save(value);
    }
}

// modern implementation

const docStore = {
    save(value: string): void {
        console.log(`${value} is saved`);
    }
}

const proxyDocStore = new Proxy(docStore, {
    apply: function(target, that, args) {
        target.save(args[0]);
    }
});

proxyDocStore.save("Untitled.docx");