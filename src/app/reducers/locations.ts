import { createReducer, on, Action } from '@ngrx/store';
import { Location } from '../utils/types';
// State
import { LocationsState } from '../states/locations';
// Actions
import { getLocations, setLocations } from '../actions/locations';

export const initialState: Array<Location> = LocationsState;

export const locationsReducer = createReducer(
  initialState,
  on(getLocations, (state) => (state)),
  on(setLocations, (state, { locations }) => {
      return state.concat(locations);
  })
);