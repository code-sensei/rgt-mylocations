import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../states/index';
import { Location } from "../utils/types";

const locationsSelector = createFeatureSelector<Location[]>("categories");

export const selectCategories = createSelector(
  locationsSelector,
  (locations: Array<Location>) => locations
);