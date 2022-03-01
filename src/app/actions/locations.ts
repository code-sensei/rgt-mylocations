import { createAction, props } from '@ngrx/store';
import { Location } from '../utils/types';

export const getLocations = createAction('[Location] Get Location');

export const setLocations = createAction('[Location] Set Locations', props<{locations: Location[]}>());

export const updateLocation = createAction('[Location] Update Location', props<{location: Location, index: Number}>());