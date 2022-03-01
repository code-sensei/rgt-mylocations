import { createReducer, on, Action } from '@ngrx/store';
import { Category } from '../utils/types';
// State
import { CategoriesState } from '../states/categories';
// Actions
import { deleteCategory, getCategories, setCategories, updateCategory } from '../actions/categories';

export const initialState: Array<Category> = CategoriesState;

export const categoriesReducer = createReducer(
  initialState,
  on(getCategories, (state) => (state)),
  on(setCategories, (state, { categories }) => {
      return state.concat(categories);
  }),
  on(updateCategory, (state, { category, index}) => {
      let current = Array.from(state);
      console.log('Curr', current);
      current[index] = category;

      return {...current};
  }),
  on(deleteCategory, (state, { index }) => {
      let current = Array.from(state);
      current.splice(index, 1);

      return {...current};
  })
);