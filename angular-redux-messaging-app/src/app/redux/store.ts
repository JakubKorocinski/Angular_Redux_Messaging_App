import { Reducer } from './messages.reducer';
import { Action } from './actions';

export type ListenerCallback = () => void;

export type UnsubscribeCallback = () => void;

export class Store<T> {
    // tslint:disable-next-line:variable-name
    private _state: T;
    // tslint:disable-next-line:variable-name
    private _listeners: ListenerCallback[] = [];

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState() {
        return this._state;
    }

    /*
        Adding the new listener is easy: we push it on to the _listeners array.

        The return value is a function which will update the list of _listeners to be
        the list of _listeners without the listener we just added. That is, it returns the
        UnsubscribeCallback that we can use to remove this listener from the list.
    */
    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(e => e !== listener);
        };
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: ListenerCallback) => listener()); // Dla kazdej metody w streamie - wykonaj ta metode
    }
}
