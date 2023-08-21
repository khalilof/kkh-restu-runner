import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as homeState from './home.reducers';
import { storageSync } from '@larscom/ngrx-store-storagesync';

export interface State {
  home: homeState.HomeState
}

export const reducers: ActionReducerMap<State> = {
  home: homeState.reducer
};


export function storageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  // provide all feature states within the features array
  // features which are not provided, do not get synced
  const metaReducer = storageSync<State>({
    features: [
      // save only home state to sessionStorage
      { stateKey: 'home', storageForFeature: window.sessionStorage },
    ],
    // defaults to localStorage
    storage: window.localStorage
  });

  return metaReducer(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storageSyncReducer] : [storageSyncReducer];
