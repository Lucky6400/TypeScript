/*
Builder Pattern encapsulates components by exposing only the building steps and
provides the final products directly. At the same time, the Builder Pattern also encapsulates
the internal structures of a product. This makes it possible for a more flexible abstraction
and implementation of building complex objects.

?Pattern scope
The Builder Pattern has a similar scope to the Abstract Factory Pattern, which extracts
abstraction from a complete collection of operations that will finally initiate the products.
Compared to the Abstract Factory Pattern, a builder in the Builder Pattern focuses more on
the building steps and the association between those steps, while the Abstract Factory
Pattern puts that part into the clients and makes its factory focus on producing components.

*/
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
var Engine = /** @class */ (function () {
    function Engine(thrust) {
        this.thrust = thrust;
    }
    return Engine;
}());
var Probe = /** @class */ (function () {
    function Probe() {
    }
    return Probe;
}());
var SolidRocketEngine = /** @class */ (function (_super) {
    __extends(SolidRocketEngine, _super);
    function SolidRocketEngine(weight, thrust) {
        var _this = _super.call(this, weight) || this;
        _this.thrust = thrust;
        return _this;
    }
    return SolidRocketEngine;
}(Engine));
var SoundingRocket = /** @class */ (function () {
    function SoundingRocket() {
    }
    return SoundingRocket;
}());
var LiquidRocketEngine = /** @class */ (function (_super) {
    __extends(LiquidRocketEngine, _super);
    function LiquidRocketEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fuelLevel = 0;
        return _this;
    }
    LiquidRocketEngine.prototype.refuel = function (level) {
        this.fuelLevel = level;
    };
    return LiquidRocketEngine;
}(Engine));
var LiquidRocketStage = /** @class */ (function () {
    function LiquidRocketStage() {
        this.engines = [];
    }
    LiquidRocketStage.prototype.refuel = function (level) {
        if (level === void 0) { level = 100; }
        for (var _i = 0, _a = this.engines; _i < _a.length; _i++) {
            var engine = _a[_i];
            engine.refuel(level);
        }
    };
    return LiquidRocketStage;
}());
var FreightRocketFirstStage = /** @class */ (function (_super) {
    __extends(FreightRocketFirstStage, _super);
    function FreightRocketFirstStage(thrust) {
        var _this = _super.call(this) || this;
        var enginesNumber = 4;
        var singleEngineThrust = thrust / enginesNumber;
        for (var i = 0; i < enginesNumber; i++) {
            var engine = new LiquidRocketEngine(singleEngineThrust);
            _this.engines.push(engine);
        }
        return _this;
    }
    return FreightRocketFirstStage;
}(LiquidRocketStage));
var FreightRocketSecondStage = /** @class */ (function (_super) {
    __extends(FreightRocketSecondStage, _super);
    function FreightRocketSecondStage(thrust) {
        var _this = _super.call(this) || this;
        _this.engines.push(new LiquidRocketEngine(thrust));
        return _this;
    }
    return FreightRocketSecondStage;
}(LiquidRocketStage));
var Satellite = /** @class */ (function () {
    function Satellite(id, weight) {
        this.id = id;
        this.weight = weight;
    }
    return Satellite;
}());
var FreightRocket = /** @class */ (function () {
    function FreightRocket() {
        this.stages = [];
    }
    return FreightRocket;
}());
/**
There's actually no abstract method in this abstract class. One of the
reasons is that specific steps might be optional to certain builders. By
implementing no-op methods, the subclasses can just leave the steps they
don't care about empty.
*/
var RocketBuilder = /** @class */ (function () {
    function RocketBuilder() {
    }
    RocketBuilder.prototype.createRocket = function () { };
    RocketBuilder.prototype.addPayload = function (payload) { };
    RocketBuilder.prototype.addStages = function () { };
    RocketBuilder.prototype.refuelRocket = function () { };
    return RocketBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.prepareRocket = function (builder, payload) {
        builder.createRocket();
        builder.addPayload(payload);
        builder.addStages();
        builder.refuelRocket();
        return builder.rocket;
    };
    return Director;
}());
var SoundingRocketBuilder = /** @class */ (function (_super) {
    __extends(SoundingRocketBuilder, _super);
    function SoundingRocketBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoundingRocketBuilder.prototype.createRocket = function () {
        this.buildingRocket = new SoundingRocket();
    };
    SoundingRocketBuilder.prototype.addPayload = function (probe) {
        this.buildingRocket.payload = probe;
    };
    SoundingRocketBuilder.prototype.addStages = function () {
        var payload = this.buildingRocket.payload;
        this.buildingRocket.engine = new SolidRocketEngine(payload.weight, 1200);
    };
    Object.defineProperty(SoundingRocketBuilder.prototype, "rocket", {
        get: function () {
            return this.buildingRocket;
        },
        enumerable: false,
        configurable: true
    });
    return SoundingRocketBuilder;
}(RocketBuilder));
var FreightRocketBuilder = /** @class */ (function (_super) {
    __extends(FreightRocketBuilder, _super);
    function FreightRocketBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FreightRocketBuilder.prototype.createRocket = function () {
        this.buildingRocket = new FreightRocket();
    };
    FreightRocketBuilder.prototype.addPayload = function (satellite) {
        this.buildingRocket.payload = satellite;
    };
    Object.defineProperty(FreightRocketBuilder.prototype, "rocket", {
        get: function () {
            return this.buildingRocket;
        },
        enumerable: false,
        configurable: true
    });
    FreightRocketBuilder.prototype.addStages = function () {
        var rocket = this.buildingRocket;
        var payload = rocket.payload;
        var stages = rocket.stages;
        stages[0] = new FreightRocketFirstStage(payload.weight * 4);
        if (payload.weight >= FreightRocketBuilder.oneStageMax) {
            stages[1] = new FreightRocketSecondStage(payload.weight);
        }
    };
    FreightRocketBuilder.prototype.refuel = function () {
        var rocket = this.buildingRocket;
        var payload = rocket.payload;
        var stages = rocket.stages;
        var oneMax = FreightRocketBuilder.oneStageMax;
        var twoMax = FreightRocketBuilder.twoStagesMax;
        var weight = payload.weight;
        stages[0].refuel(Math.min(weight, oneMax) / oneMax * 100);
        if (weight >= oneMax) {
            stages[1]
                .refuel((weight - oneMax) / (twoMax - oneMax) * 100);
        }
    };
    FreightRocketBuilder.oneStageMax = 1000;
    FreightRocketBuilder.twoStagesMax = 2000;
    return FreightRocketBuilder;
}(RocketBuilder));
var director = new Director();
var soundingRocketBuilder = new SoundingRocketBuilder();
var probe = new Probe();
var soundingRocket = director.prepareRocket(soundingRocketBuilder, probe);
var freightRocketBuilder = new FreightRocketBuilder();
var satellite = new Satellite(0, 10000);
var freightRocket = director.prepareRocket(freightRocketBuilder, satellite);
console.log(soundingRocket);
console.log(freightRocket);
/*
?Consequences
As the Builder Pattern takes greater control of the product structures and how the building
steps influence each other, it provides the maximum flexibility by subclassing the builder
itself, without changing the director (which plays a similar role to a client in the Abstract
Factory Pattern).
*/ 
