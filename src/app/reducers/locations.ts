import { createReducer, on, Action } from '@ngrx/store';
import { Location } from '../utils/types';
// State
import { LocationsState } from '../states/locations';
// Actions
import { addLocation, deleteLocation, getLocations, setLocations, updateLocation } from '../actions/locations';

export const initialState: Array<Location> = LocationsState;

export const locationsReducer = createReducer(
  initialState,
  on(getLocations, (state) => (state)),
  on(addLocation, (state, { location }) => {
      let current = Array.from(state);
      current.push(location);
      console.log(state, current);

      return current;
  }),
  on(setLocations, (state, { locations }) => {
      return locations;
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