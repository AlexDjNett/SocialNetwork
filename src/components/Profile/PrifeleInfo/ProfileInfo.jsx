import React     from "react";
import s         from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='ProfilePhoto'/>
                <div>{props.profile.fullName}</div>
                <div>Ищу работу {props.profile.lookingForAJob ? '✅' : '⛔'}</div>

            </div>
        </div>
    );
};

export default ProfileInfo;
