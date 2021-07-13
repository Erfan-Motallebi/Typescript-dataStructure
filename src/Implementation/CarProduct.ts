import { Car } from "../lib/Car";

const pride = new Car("color:yellow, model:2021, maxSpeed:220, maxGear:6");

console.log({
  color: pride._color,
  model: pride._model,
  maxSpeed: pride._maxSpeed,
  maxGear: pride._maxGear,
});
