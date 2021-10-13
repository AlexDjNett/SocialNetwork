import React from "react";
import s     from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='data:image/jpeg;base64,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'/>
            {props.message}
            <div>
                <span>like</span>
                <span> {props.likesCounts}</span>
            </div>
        </div>
    );
};

export default Post;
