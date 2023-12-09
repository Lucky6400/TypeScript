// The members of a class (properties & methods) are typed using type annotations.
var Chelsea = /** @class */ (function () {
    function Chelsea() {
        this.centerForward = "Diego Costa";
    }
    return Chelsea;
}());
var chelsea = new Chelsea();
var cf = chelsea.centerForward;
console.log(cf);
/*
::There are three main visibility modifiers in TypeScript.

--> public - (default) allows access to the class member from anywhere
--> private - only allows access to the class member from within the class
--> protected - allows access to the class member from itself and any classes that inherit it.
*/
var Barcelona = /** @class */ (function () {
    function Barcelona(rst) {
        this.rst = rst; // this is instance of a class
    }
    Barcelona.prototype.printName = function () {
        return this.rst;
    };
    return Barcelona;
}());
var barca = new Barcelona("Lionel Messi");
// console.log(barca.rst) ==> throws error
// console.log(barca.printName()) ==> works fine
// Private parameters
var ParisSaintGerman = /** @class */ (function () {
    function ParisSaintGerman(attacker) {
        this.attacker = attacker;
    }
    return ParisSaintGerman;
}());
// readonly
var Person = /** @class */ (function () {
    function Person(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
