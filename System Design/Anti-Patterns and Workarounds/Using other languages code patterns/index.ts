/*
This means that if you are using the code idiomatic to other programming languages then it is not a good practice since Typescript works differently and it only requires patterns that align with it's working.
*/

class Employee {
    private _name: string;

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    private _age: string;

    public get age(): string {
        return this._age;
    }
    public set age(value: string) {
        this._age = value;
    }


}

/*
Unlike java, we cannot have more than one constructors, also getters and setters are implemented differently. Copying Java language patterns here will simply cause issues.
*/