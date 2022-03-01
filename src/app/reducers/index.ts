import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';

  
  import { categoriesReducer } from './categories';
  import { locationsReducer } from './locations';
  import { environment } from '../../environments/environment';
  import { Category, Location } from '../utils/types';
  
  export interface State {
    categories: Category[];
    locations: Location[];
  }
  
  export const reducers: ActionReducerMap<State> = {
    categories: categoriesReducer,
    locations: locationsReducer,
  };
  
//   export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//     return localStorageSync({keys: ['categories', 'products', 'locations', 'cart', 'profile', 'orders', 'system']})(reducer);
//   }
  
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? reducers : [];
  