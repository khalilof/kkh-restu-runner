import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as homeState from './home.reducers';

export interface State {
  home: homeState.HomeState
}

export const reducers: ActionReducerMap<State> = {
  home: homeState.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
