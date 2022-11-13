// enum represents a group of unchangeable variables
// by default initialized with 0
var Players;
(function (Players) {
    Players[Players["diegoCosta"] = 0] = "diegoCosta";
    Players[Players["johnTerry"] = 1] = "johnTerry";
    Players[Players["edenHazard"] = 2] = "edenHazard";
    Players[Players["cescFabregas"] = 3] = "cescFabregas";
    Players[Players["brainslavIvanovic"] = 4] = "brainslavIvanovic";
})(Players || (Players = {}));
console.log(Players.brainslavIvanovic);
// string enums
var Attackers;
(function (Attackers) {
    Attackers["radamelFalcao"] = "Radamel Falcao";
    Attackers["davidVilla"] = "David Villa";
})(Attackers || (Attackers = {}));
console.log(Attackers.davidVilla);
