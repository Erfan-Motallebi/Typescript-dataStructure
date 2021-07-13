export class Car {
    constructor(__model, __color, __maxSpeed, __maxGear, __currentGear) {
        this._color = "";
        this._color = __color;
        this._model = __model;
        this._maxSpeed = __maxSpeed;
        this._maxGear = __maxGear;
        this._currentGear = __currentGear;
    }
    get color() {
        return this._color;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get model() {
        return this._model;
    }
    get currentGear() {
        return this._currentGear;
    }
    get maxGear() {
        return this._maxGear;
    }
    switchOn() {
        if (this.currentGear === 0) {
            console.log("The car is swtiched on");
        }
        else {
            console.error("Your gear is not free");
        }
    }
    switchOff() {
        console.log("The car is swtiched off");
    }
}
//# sourceMappingURL=car.js.map