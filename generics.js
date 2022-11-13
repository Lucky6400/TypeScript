// Generics allow creating 'type variables'. We do not need to explicitly define what types are being used.
// WITH FUNCTIONS
function getPlayerPosition(name, shirtNo) {
    console.log("".concat(name, " with shirt no. ").concat(shirtNo, " plays as mid fielder."));
    return [name, String(shirtNo)];
}
getPlayerPosition('Diego Costa', 19);
/*

So here as you saw that S and N are the variables that were created by us. Now when we called the function with our desired arguements, types are assigned to them automatically.

~ Hover over function call on line no. 9 to see a surprise.

*/
// WITH CLASSES
var Chelsea = /** @class */ (function () {
    function Chelsea() {
    }
    Chelsea.prototype.setValue = function (playerName, playerShirtNo) {
        this.name = playerName;
        this.shirtNo = playerShirtNo;
    };
    Chelsea.prototype.getPlayerName = function () {
        return this.name;
    };
    Chelsea.prototype.getPlayerNumber = function () {
        return this.shirtNo;
    };
    return Chelsea;
}());
var chelsea = new Chelsea();
chelsea.setValue('Diego Costa', 19);
console.log(chelsea.getPlayerName());
console.log(chelsea.getPlayerNumber());
