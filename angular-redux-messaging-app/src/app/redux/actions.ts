/**
 * Użyliśmy Action z core Reduxa! Nie używamy już właśnych customowych akcji.
 * Zauważ, że lista wiadomości to także może być lista TODO
 */
import {
    Action,
    ActionCreator
} from 'redux';

// Actions
// AddMessageAction - adds message to messages
export interface AddMessageAction extends Action {
    message: string;
}

// DeleteMessageAction - removes message from the state by using a posistion index in array. 
// In more sophisticated examples this could use e.g. id of an object from backend.
export interface DeleteMessageAction extends Action {
    index: number;
}

export const addMessageAction: ActionCreator<Action> = (messagePar: string) => {
    return {
        type: 'ADD_MESSAGE',
        message: messagePar,
    };
};

export const deleteMessageAction: ActionCreator<Action> = (indexPar: number) => {
    return {
        type: 'DELETE_MESSAGE',
        index: indexPar,
    };
};

