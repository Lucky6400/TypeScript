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
var PremierLeague = /** @class */ (function () {
    function PremierLeague() {
    }
    PremierLeague.prototype.getPosition = function () {
        return "".concat(this.getShirtNumber, " plays as CST.");
    };
    return PremierLeague;
}());
var Chelsea = /** @class */ (function (_super) {
    __extends(Chelsea, _super);
    function Chelsea(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Chelsea.prototype.getShirtNumber = function () {
        return this.name === 'Diego Costa' ? 19 : 10;
    };
    return Chelsea;
}(PremierLeague));
var chelsea = new Chelsea('Diego Costa');
console.log(chelsea.getShirtNumber());
