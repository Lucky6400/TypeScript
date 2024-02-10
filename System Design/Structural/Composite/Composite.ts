/*
Composite is a pattern that offers an alternative way to define hierarchies of objects
without using inheritance. Again, you want a pattern that avoids inheritance as much
as possible because inheritance has many drawbacks in practice. This is one more case
against it.
One analogy of this pattern is a company having different types of employee roles,
forming a pyramid. Each person is an employee but they have different responsibilities
and you can traverse the hierarchy from top to bottom. Using Composite, you want to
define objects similar in nature and type, but without attaching too much business logic
and behavior to each of them. You want to allow the clients to decide what to perform
with this composition of objects. This allows the clients to treat all objects in the
hierarchy uniformly.
*/

import { ClientElement } from "./typings";

export class AppComponent implements ClientElement {

    private children: ClientElement[];

    constructor() {
        this.children = [];
    }

    render(): string {
        let str = /*html*/`<html>\n`;

        for (let i = 0; i < this.children.length; i++) {
            str += this.children[i].render() + "\n";
        }

        str += /*html*/`</html>`;
        return str;
    }

    add(child: ClientElement): void {
        this.children.push(child);
    }

    remove(idx: number): void {
        if (idx < 0 || idx >= this.children.length) {
            throw new Error("Invalid index " + idx);
        }

        this.children.splice(idx, 1)
    }

    replace(idx: number, child: ClientElement): void {
        if (idx < 0 || idx >= this.children.length) {
            throw new Error("Invalid index " + idx);
        }

        this.children.splice(idx, 1, child)
    }
}

export class Element implements ClientElement {

    private elemType: string;
    private propString: string;
    private textStr: string;

    constructor(elemType: string, propString?: string, textStr?: string) {
        this.textStr = textStr;
        this.elemType = elemType;
        this.propString = propString;
    }

    render(): string {
        return /*html*/`<${this.elemType}${this.propString ? (" " + this.propString) : ""}>${this.textStr || ""}</${this.elemType}>`
    }
}

const app = new AppComponent();
const div = new Element("div", "", "First name");
const input = new Element("input", `type="text" placeholder="Enter here..."`);
const fnameinput = new Element("input", `type="text"`)
app.add(div);
app.add(input)
app.replace(1, fnameinput);
console.log(app.render())