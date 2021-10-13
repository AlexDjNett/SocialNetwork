import React     from 'react';
import s         from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1 , name: 'Aleksey'} ,
        {id: 2 , name: 'Ivan'} ,
        {id: 3 , name: 'Valera'} ,
        {id: 4 , name: 'Misha'} ,
        {id: 5 , name: 'Armen'} ,
        {id: 6 , name: 'Nikita'}
    ]

    let messages = [
        {id: 1 , message: 'Hi'} ,
        {id: 2 , message: 'How are you been?'} ,
        {id: 3 , message: 'Nice'} ,
        {id: 4 , message: 'Hello'} ,
        {id: 5 , message: 'I miss you'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;