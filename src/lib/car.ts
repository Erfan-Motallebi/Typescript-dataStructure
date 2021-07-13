export class Car {
  private _color: string = "";
  private _maxSpeed: number;
  private _model: number;
  private _maxGear: number;
  private _currentGear: number;

  constructor(
    __model: number,
    __color: string,
    __maxSpeed: number,
    __maxGear: number,
    __currentGear: number
  ) {
    this._color = __color;
    this._model = __model;
    this._maxSpeed = __maxSpeed;
    this._maxGear = __maxGear;
    this._currentGear = __currentGear;
  }

  get color(): string {
    return this._color;
  }
  get maxSpeed(): number {
    return this._maxSpeed;
  }
  get model(): number {
    return this._model;
  }
  get currentGear(): number {
    return this._currentGear;
  }
  get maxGear(): number {
    return this._maxGear;
  }

  switchOn(): void {
    if (this.currentGear === 0) {
      console.log("The car is swtiched on");
    } else {
      console.error("Your gear is not free");
    }
  }
  switchOff(): void {
    console.log("The car is swtiched off");
  }
}
