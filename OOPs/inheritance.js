// interface can be used to define a type that a class must follow. For this, we use 'implements' keyword.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChelseaFC = /** @class */ (function () {
    function ChelseaFC() {
        this.name = "Chelsea FC";
        this.players = 11;
        this.stadium = "Stamford Bridge";
        this.champions = false;
    }
    return ChelseaFC;
}());
var ChelseaFC2 = /** @class */ (function () {
    function ChelseaFC2(rival) {
        this.rival = rival;
        this.name = "Chelsea FC";
        this.players = 11;
        this.stadium = "Stamford Bridge";
        this.champions = false;
        this.league = 'Barclays Premier League';
        this.ranking = 3;
        this.wins = 23;
        this.losses = 9;
    }
    ChelseaFC2.prototype.printRivalName = function () {
        return this.rival;
    };
    return ChelseaFC2;
}());
// 'extends' keyword
var ChelseaFC3 = /** @class */ (function (_super) {
    __extends(ChelseaFC3, _super);
    function ChelseaFC3(rival) {
        return _super.call(this, rival) || this;
    }
    return ChelseaFC3;
}(ChelseaFC2));
var chelsea3 = new ChelseaFC3('Manchester United');
console.log(chelsea3.printRivalName());
