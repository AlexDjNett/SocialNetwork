import React               from "react";
import ProfileInfo         from "./PrifeleInfo/ProfileInfo";
import MyPostsContainer    from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
