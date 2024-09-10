import {Unit} from "../types";

export const getColorByAge =(unit:Unit) => {

  switch (unit.age) {
    case 'Castle':
      return 'castle'
    case 'Dark':
      return 'dark'
    case 'Imperial':
      return 'imperial'
    case 'Feudal':
      return 'feudal'
  }

  return null;

}
