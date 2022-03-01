import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../states/index';
import { Location } from "../utils/types";

const locationsSelector = createFeatureSelector<Location[]>("locations");

export const selectLocations = createSelector(
  locationsSelector,
  (locations: Array<Location>) => locations
);