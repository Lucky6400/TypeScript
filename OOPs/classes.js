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
--> protected - allows access to the class member from itself and any classes that inherit it,
    which is covered in the inheritance section below
*/
var Barcelona = /** @class */ (function () {
    function Barcelona(rst) {
        this.rst = rst;
    }
    Barcelona.prototype.printName = function () {
        return this.rst;
    };
    return Barcelona;
}());
var barca = new Barcelona("Lionel Messi");
console.log(barca.printName());
