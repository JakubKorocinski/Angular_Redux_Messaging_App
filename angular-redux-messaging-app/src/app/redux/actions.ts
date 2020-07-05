export interface Action {
    type: string;   // e.g. INCREMENT, ADD_USER
    payload?: any; // payload may be optional
}

// AddMessageAction - adds message to messages
export interface AddMessageAction extends Action {
    message: string;
}

// DeleteMessageAction - removes message from the state by using a posistion index in array. 
// In more sophisticated examples this could use e.g. id of an object from backend.
export interface DeleteMessageAction extends Action {
    index: number;
}

export class MessageActions {

    static addMessage(messagePar: string): AddMessageAction {
        return {
            type: 'ADD_MESSAGE',
            message: messagePar,
        };
    }

    static deleteMessage(indexPar: number): DeleteMessageAction {
        return {
            type: 'DELETE_MESSAGE',
            index: indexPar,
        };
    }
}
