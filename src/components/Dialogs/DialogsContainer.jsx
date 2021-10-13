import React                     from 'react';
import s                         from "./Dialogs.module.css";
import DialogItem                from "./DialogItem/DialogItem";
import Message                                                                   from "./Message/Message";
import {sendMessageCreator , updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageText;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={newMessageBody}
                                  placeholder='Enter your message'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add messages</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;