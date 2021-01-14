import React from 'react';
import { } from "./Post.css";
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imgUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="S"
                    src={imgUrl} />
                <h3>{username}</h3>
            </div>

            {/*header contains avatar nd username */}
            <img className="Post_img" src={imgUrl} />
            {/*Image section */}
            <h4 className="post_text">
                <strong>{username}</strong>
                {caption}</h4>
            {/*username nd cation implement section*/}

        </div>
    )
}

export default Post
