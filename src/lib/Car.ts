type Properties =
  | {
      color: string;
      model: number;
      maxSpeed: number;
      maxGear: number;
    }
  | string;

enum engineState {
  off = 0,
  on = 1,
}

enum gearState {
  rearGear = -1,
  clear = 0,
  firstGear,
  secondGear,
  thirdGear,
  fourthGear,
  fifthGear,
  sixGear,
}

enum clutchState {
  engaged = 1,
  notEngaged = 0,
}

enum gasState {
  empty = 0,
  full = 1,
}

export class Car {
  private color: string = "";
  private model: number = 0;
  private maxSpeed: number = 0;
  private maxGear: number = 0;
  private currentGear: number = gearState.clear;
  private state: engineState = engineState.off;
  private clutch: clutchState = clutchState.notEngaged;
  private gasBankState: gasState = gasState.full;
  constructor(_Options: Properties) {
    if (typeof _Options === "string") {
      // "color:white,model:2021,maxSpeed:220,maxGear:220"
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
    } else if (typeof _Options === "object") {
      const { color, model, maxSpeed, maxGear } = _Options;
      this.color = color;
      this.model = model;
      this.maxSpeed = maxSpeed;
      this.maxGear = maxGear;
    }
  }

  public get _color(): string {
    return this.color;
  }

  public get _model(): number {
    return this.model;
  }

  public get _maxSpeed(): number {
    return this.maxSpeed;
  }
  public get _maxGear(): number {
    return this.maxGear;
  }

  public get _currentGear(): object {
    return {
      currentGear: this.currentGear,
    };
  }

  public get _gasBankState(): gasState {
    return this.gasBankState;
  }

  set _gasBankState(value) {
    this.gasBankState = value;
  }
  switchOn(): void {
    if (
      this.currentGear !== gearState.clear ||
      this.gasBankState === gasState.empty
    ) {
      console.warn({
        orGear: "not clear yet !",
        orGas: "No Gas",
      });
      if (this.gasBankState === gasState.empty) {
        console.warn({
          gasState: "Empty",
        });
      } else {
        console.warn({
          currentGear: this.currentGear,
        });
      }
    } else {
      this.state = engineState.on;
      console.info("The car is switched on.");
    }
  }

  switchOff(): void {
    if (this.currentGear !== gearState.clear) {
      console.warn({
        warn: "The car is not clear! shift the gear into 0.",
      });
    } else {
      console.info("The car is switched off.");
    }
  }

  clutchEngager = () => {
    console.log("Engaging the clutch to switch into another gear < up/down >");
    this.clutch = clutchState.engaged;
  };

  gearUp = (): void => {
    if (this.state === engineState.off) {
      console.warn({
        error: "The car has not been switched on yet !",
      });
    } else if (
      this.clutch === clutchState.engaged &&
      this.currentGear < this.maxGear
    ) {
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
    } else {
      console.log({
        orCluchState: "Check the clutch state please !",
        orMaxGear: "You exceeded the max speed",
      });
    }
  };

  gearDown = (): void => {
    if (this.state === engineState.off || this.currentGear === 0) {
      console.error({
        error: "check the engine / current state of the gear !",
      });
    } else if (this.clutch === clutchState.engaged) {
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

  brake(): void {
    if (this.currentGear === gearState.clear) {
      console.log("The car has stopped");
    } else {
      console.log({
        warn: "You should decrease the gears to 0 to stop completely !",
      });
    }
  }

  clearGear = () => {
    console.log("trying shifting into gear [ 0 ]");
    this.currentGear = gearState.clear;
  };
  beep() {
    console.log("Beep Beep");
  }
}
