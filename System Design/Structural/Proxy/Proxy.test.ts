import { DocStore, ProxyStore, Store } from './Proxy';

describe('DocStore', () => {
    let docStore: Store;

    beforeEach(() => {
        docStore = new DocStore();
    });

    it('should save value', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        docStore.save('test');
        expect(consoleSpy).toHaveBeenCalledWith('test is saved');
    });
});

describe('ProxyStore', () => {
    let proxyStore: Store;

    beforeEach(() => {
        proxyStore = new ProxyStore();
    });

    it('should save value', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        proxyStore.save('test');
        expect(consoleSpy).toHaveBeenCalledWith('test is saved');
    });
});
