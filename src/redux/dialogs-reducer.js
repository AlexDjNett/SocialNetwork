const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1 , message: 'Hi'} ,
        {id: 2 , message: 'How are you been?'} ,
        {id: 3 , message: 'Nice'} ,
        {id: 4 , message: 'Hello'} ,
        {id: 5 , message: 'I miss you'}
    ] ,
    newMessageText: 'loopMe' ,
    dialogs: [
        {id: 1 , name: 'Aleksey'} ,
        {id: 2 , name: 'Ivan'} ,
        {id: 3 , name: 'Valera'} ,
        {id: 4 , name: 'Misha'} ,
        {id: 5 , name: 'Armen'} ,
        {id: 6 , name: 'Nikita'}
    ]
}

const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6 ,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.dialogs = [...stateCopy.dialogs];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.body;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT , body: text});

export default dialogsReducer;