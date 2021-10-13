import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1 , message: 'Hi, how have you been?' , likesCount: 12} ,
                {id: 2 , message: 'It\'s, my first post?' , likesCount: 20} ,
                {id: 3 , message: 'Hi' , likesCount: 1} ,
                {id: 4 , message: 'What?' , likesCount: 40}
            ] ,
            newPostText: 'alexdjnett'
        } ,
        dialogsPage: {
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
        },
        sidebar: {}
    } ,
    _callSubscriber() {
        console.log("Change store");
    } ,
    getState() {
        return this._state;
    } ,
    subscribe(observer) {
        this._callSubscriber = observer;
    } ,
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber ( this._state );

    }
}





window.state = store;
export default store;