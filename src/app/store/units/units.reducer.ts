import { createReducer, on } from '@ngrx/store';
import { selectAge, selectCost } from './units.actions';

type StateType = {
  selectedAge?: string | null
  food?: number | null,
  gold?: number | null,
  wood?: number | null,
}

export const initialState : StateType = {
  selectedAge: "All",
  food: null,
  wood: null,
  gold: null
};

export const unitsReducer = createReducer(
  initialState,
  on(selectAge, (state, { selectedAge}) => ({
    ...state,
    selectedAge: selectedAge
  })),
  on(selectCost, (state, newState) => {
    console.log(newState)

    return ({
      ...state,
      ...newState
    })
  }),
);
