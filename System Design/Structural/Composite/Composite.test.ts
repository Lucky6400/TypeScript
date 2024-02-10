import { AppComponent, Element } from './Composite';

describe('AppComponent', () => {
    let app: AppComponent;
    beforeEach(() => {
        app = new AppComponent();
    });

    test('should add child elements', () => {
        const div = new Element("div", "", "First name");
        app.add(div);
        expect(app.render()).toContain('<div>First name</div>');
    });

    test('should remove child elements', () => {
        const div = new Element("div", "", "First name");
        app.add(div);
        app.remove(0);
        expect(app.render()).not.toContain('<div>First name</div>');
    });

    test('should replace child elements', () => {
        const div = new Element("div", "", "First name");
        const input = new Element("input", `type="text" placeholder="Enter here..."`);
        app.add(div);
        app.replace(0, input);
        expect(app.render()).toContain('<input type="text" placeholder="Enter here..."></input>');
    });
});
