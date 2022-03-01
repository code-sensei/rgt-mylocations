import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../states/index';
import { Category } from "../utils/types";

const categorySelector = createFeatureSelector<Category[]>("categories");

export const selectCategories = createSelector(
  categorySelector,
  (categorys: Array<Category>) => categorys
);