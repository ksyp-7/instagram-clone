import React, { useState, useEffect } from 'react';
import Post from './Post';
import { db } from './firebase.jsx';
import './App.css'
import Model from '@material-ui/core/Modal';
import {makeStyles, modalStyle} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
function getModelStyle(){
  const top = 50;
  const left = 50;

  return{
    top: `${top}%`,
    left: `${left}%`,
    transfrom: `translate(-${top}%,-${left})`,
  };
}

const useStyels = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));

function App() {
  const classes = useStyels();
  const [modalStyle] = useState(getModelStyle);
  const [posts, setPosts] = useState([]);
  const [open,setOpen] = useState(false);
  //useEfect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires...
      setPosts(snapshot.docs.map(doc => doc.data()
      ));
    })
  }, []);

  return (
    <div className="App">
      <Model
        open={open}
        onClose={() => setOpen(false)}>  
        <div
          style={modalStyle}
          className={classes.paper}>
          <h2>I am Model</h2>

        </div>
      </Model>

      <div className="header">
        <img
          className="header_Img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
          alt=""
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {
        posts.map(post => (
          <Post username={post.username}
            caption={post.caption}
            imgUrl={post.imgUrl}
          />
        ))
      }
    </div>
  );
}

export default App;
