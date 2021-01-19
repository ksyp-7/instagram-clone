import React,{useState} from 'react';
import { Button, Input } from '@material-ui/core';

function ImageUpload() {
    const [caption,setCaption] = useState('');
    const [progress,setProgress] = useState('');
    const [image,setImage] = useState('');

    const handelChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const handelUpload = () => {

    }
    return (
        <div>
            <input
                type="text"
                placeholder='Enter a caption ....'
                onChange={event => setCaption(event.target.value)}
            />
            <input
                type="file"
                onChange={handelChange}
            />
            <Button onClick={handelChange}>
                Upload
        </Button>

        </div>
    )
}

export default ImageUpload
