import { createAction, props } from '@ngrx/store';
import { Location } from '../utils/types';

export const getLocations = createAction('[Location] Get Location');

export const setLocations = createAction('[Location] Set Locations', props<{locations: Location[]}>());

export const addLocation = createAction('[Location] Add Location', props<{location: Location}>());

export const updateLocation = createAction('[Location] Update Location', props<{location: Location, index: any}>());

export const deleteLocation = createAction('[Location] Delete Locations', props<{index: any}>());