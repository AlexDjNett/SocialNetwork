import React                     from 'react';
import s                         from "./Dialogs.module.css";
import DialogItem                from "./DialogItem/DialogItem";
import Message                                                                   from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText;

    let addMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
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