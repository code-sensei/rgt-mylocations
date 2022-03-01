import { createAction, props } from '@ngrx/store';
import { Category } from '../utils/types';

export const getCategories = createAction('[Category] Get Category');

export const setCategories = createAction('[Category] Set Categories', props<{categories: Category[]}>());

export const updateCategory = createAction('[Category] Update Category', props<{category: Category, index: any}>());

export const deleteCategory = createAction('[Category] Delete Category', props<{index: any}>());