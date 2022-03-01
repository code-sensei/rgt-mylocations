import { createReducer, on, Action } from '@ngrx/store';
import { Location } from '../utils/types';
// State
import { LocationsState } from '../states/locations';
// Actions
import { deleteLocation, getLocations, setLocations, updateLocation } from '../actions/locations';

export const initialState: Array<Location> = LocationsState;

export const locationsReducer = createReducer(
  initialState,
  on(getLocations, (state) => (state)),
  on(setLocations, (state, { locations }) => {
      return state.concat(locations);
  }),
  on(updateLocation, (state, { location, index }) => {
    let current = Array.from(state);
    console.log('Curr', current);
    current[index] = location;

    return {...current};
  }),
  on(deleteLocation, (state, { index }) => {
      let current = Array.from(state);
      current.splice(index, 1);

      return {...current};
  })
);