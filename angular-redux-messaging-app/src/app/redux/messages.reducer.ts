import { AddMessageAction, DeleteMessageAction } from './actions';
import { Action } from 'redux';
import { AppState } from './state';

export type Reducer<T> = (state: T, action: Action) => T;

const initialState: AppState = { messages: [] };

// Implementing the Reducer
export const messagesReducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return Object.assign({}, state, { messages: state.messages.concat((action as AddMessageAction).message)});
        case 'DELETE_MESSAGE':
            const index = (action as DeleteMessageAction).index;
            return Object.assign({}, state,  { messages: [
                                                    ...state.messages.slice(0, index),
                                                    ...state.messages.slice(index + 1, state.messages.length)
                                                ]
                                            }
            );
        default:
            return state;
    }
};
