import React from 'react';
import { } from "./Post.css";
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="S"
                    src="https://picsum.photos/200/300" />
                <h3>Username</h3>
            </div>

            {/*header contains avatar nd username */}
            <img className="Post_img" src="https://upload.wikimedia.org/wikipedia/commons/0/06/İnstagram-Profilime-Kim-Baktı-1.png" />
            {/*Image section */}
            <h4 className="post_text">
                <strong>ksyp.7  </strong>
                this_is_the_caption.</h4>
            {/*username nd cation implement section*/}

        </div>
    )
}

export default Post
