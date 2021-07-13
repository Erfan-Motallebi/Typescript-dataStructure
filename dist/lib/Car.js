"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var engineState;
(function (engineState) {
    engineState[engineState["off"] = 0] = "off";
    engineState[engineState["on"] = 1] = "on";
})(engineState || (engineState = {}));
var gearState;
(function (gearState) {
    gearState[gearState["rearGear"] = -1] = "rearGear";
    gearState[gearState["clear"] = 0] = "clear";
    gearState[gearState["firstGear"] = 1] = "firstGear";
    gearState[gearState["secondGear"] = 2] = "secondGear";
    gearState[gearState["thirdGear"] = 3] = "thirdGear";
    gearState[gearState["fourthGear"] = 4] = "fourthGear";
    gearState[gearState["fifthGear"] = 5] = "fifthGear";
    gearState[gearState["sixGear"] = 6] = "sixGear";
})(gearState || (gearState = {}));
var clutchState;
(function (clutchState) {
    clutchState[clutchState["engaged"] = 1] = "engaged";
    clutchState[clutchState["notEngaged"] = 0] = "notEngaged";
})(clutchState || (clutchState = {}));
var gasState;
(function (gasState) {
    gasState[gasState["empty"] = 0] = "empty";
    gasState[gasState["full"] = 1] = "full";
})(gasState || (gasState = {}));
class Car {
    constructor(_Options) {
        this.color = "";
        this.model = 0;
        this.maxSpeed = 0;
        this.maxGear = 0;
        this.currentGear = gearState.clear;
        this.state = engineState.off;
        this.clutch = clutchState.notEngaged;
        this.gasBankState = gasState.full;
        this.clutchEngager = () => {
            console.log("Engaging the clutch to switch into another gear < up/down >");
            this.clutch = clutchState.engaged;
        };
        this.gearUp = () => {
            if (this.state === engineState.off) {
                console.warn({
                    error: "The car has not been switched on yet !",
                });
            }
            else if (this.clutch === clutchState.engaged &&
                this.currentGear < this.maxGear) {
                console.info("The gear is about to go up . . . ");
                this.currentGear++;
                switch (this.currentGear) {
                    case 1:
                        console.log(`Current Gear <UP> : ${gearState.firstGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                    case 2:
                        console.log(`Current Gear <UP> : ${gearState.secondGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                    case 3:
                        console.log(`Current Gear <UP> : ${gearState.thirdGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                    case 4:
                        console.log(`Current Gear <UP> : ${gearState.fourthGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                    case 5:
                        console.log(`Current Gear <UP> : ${gearState.fifthGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                    case 6:
                        console.log(`Current Gear <UP> : ${gearState.sixGear}`);
                        this.clutch = clutchState.notEngaged;
                        break;
                }
            }
            else {
                console.log({
                    orCluchState: "Check the clutch state please !",
                    orMaxGear: "You exceeded the max speed",
                });
            }
        };
        this.gearDown = () => {
            if (this.state === engineState.off || this.currentGear === 0) {
                console.error({
                    error: "check the engine / current state of the gear !",
                });
            }
            else if (this.clutch === clutchState.engaged) {
                console.info("The gear is about to go up . . . ");
                this.currentGear--;
                switch (this.currentGear) {
                    case -1:
                        console.log(`Current Gear <BACK> : ${gearState.rearGear}`);
                        break;
                    case 1:
                        console.log(`Current Gear <UP> : ${gearState.firstGear}`);
                        break;
                    case 2:
                        console.log(`Current Gear <UP> : ${gearState.secondGear}`);
                        break;
                    case 3:
                        console.log(`Current Gear <UP> : ${gearState.thirdGear}`);
                        break;
                    case 4:
                        console.log(`Current Gear <UP> : ${gearState.fourthGear}`);
                        break;
                    case 5:
                        console.log(`Current Gear <UP> : ${gearState.fifthGear}`);
                        break;
                    case 6:
                        console.log(`Current Gear <UP> : ${gearState.sixGear}`);
                        break;
                }
            }
        };
        this.clearGear = () => {
            console.log("trying shifting into gear [ 0 ]");
            this.currentGear = gearState.clear;
        };
        if (typeof _Options === "string") {
            const optionArray = _Options.split(",");
            for (let index = 0; index < optionArray.length; index++) {
                const [property, value] = optionArray[index].split(":");
                switch (property) {
                    case "color":
                        this.color = value;
                        break;
                    case "model":
                        this.model = +value;
                        break;
                    case "maxSpeed":
                        this.maxSpeed = +value;
                        break;
                    case "maxGear":
                        this.maxGear = +value;
                        break;
                }
            }
        }
        else if (typeof _Options === "object") {
            const { color, model, maxSpeed, maxGear } = _Options;
            this.color = color;
            this.model = model;
            this.maxSpeed = maxSpeed;
            this.maxGear = maxGear;
        }
    }
    get _color() {
        return this.color;
    }
    get _model() {
        return this.model;
    }
    get _maxSpeed() {
        return this.maxSpeed;
    }
    get _maxGear() {
        return this.maxGear;
    }
    get _currentGear() {
        return {
            currentGear: this.currentGear,
        };
    }
    get _gasBankState() {
        return this.gasBankState;
    }
    set _gasBankState(value) {
        this.gasBankState = value;
    }
    switchOn() {
        if (this.currentGear !== gearState.clear ||
            this.gasBankState === gasState.empty) {
            console.warn({
                orGear: "not clear yet !",
                orGas: "No Gas",
            });
            if (this.gasBankState === gasState.empty) {
                console.warn({
                    gasState: "Empty",
                });
            }
            else {
                console.warn({
                    currentGear: this.currentGear,
                });
            }
        }
        else {
            this.state = engineState.on;
            console.info("The car is switched on.");
        }
    }
    switchOff() {
        if (this.currentGear !== gearState.clear) {
            console.warn({
                warn: "The car is not clear! shift the gear into 0.",
            });
        }
        else {
            console.info("The car is switched off.");
        }
    }
    brake() {
        if (this.currentGear === gearState.clear) {
            console.log("The car has stopped");
        }
        else {
            console.log({
                warn: "You should decrease the gears to 0 to stop completely !",
            });
        }
    }
    beep() {
        console.log("Beep Beep");
    }
}
exports.Car = Car;
//# sourceMappingURL=Car.js.map