import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { storage, db } from './firebase';
import firebase from 'firebase';
import './ImgUpl.css';

function ImageUpload({ username }) {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState('');
    const [image, setImage] = useState('');

    const handelChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handelUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes * 100)
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestap: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imgUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };
    return (
        <div className="imgupl">
            <progress
                className="pro"
                value={progress}
                max="100"
            />
            <Input
                type="text"
                placeholder='Enter a caption ....'
                onChange={event => setCaption(event.target.value)}
            />
            <br />
            <Input
                type="file"
                onChange={handelChange}
            />
            <Button onClick={handelUpload}>
                Upload
        </Button>

        </div>
    )
}

export default ImageUpload
