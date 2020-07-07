import { AppState, initialState } from './state';
import {
    Store,
    StoreEnhancer,
    createStore,
    compose,
    Action
} from 'redux';

/**
 * The code above will check for window.devToolsExtension, which is defined by
 * Redux Devtools, and if it exists, we will use it. If it doesn’t exist, we’re just returning
 * an identity function (f => f) that will return whatever is passed to it.
 */


const devtools: StoreEnhancer<AppState> =
// tslint:disable-next-line:no-string-literal
window['devToolsExtension'] ?
// tslint:disable-next-line:no-string-literal
window['devToolsExtension']() : f => f;



import {
    messagesReducer as reducer
  } from './messages.reducer';
import { InjectionToken } from '@angular/core';

export function createAppStore(): Store<AppState> {
    return createStore(
      reducer,
      initialState,
      compose(devtools)
      /**
       * Now whenever we dispatch an action and change our state, we can inspect it in our browser!
       */
    );
}

// For DI
export const AppStore = new InjectionToken('App.store');
export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];

