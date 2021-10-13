import React       from 'react';
import s           from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";



const Dialogs = ( props ) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Armen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Nikita</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you been?</div>
                <div className={s.message}>Nice</div>
            </div>
        </div>
    );
};

export default Dialogs;