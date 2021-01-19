import React, { useState, useEffect } from 'react';
import Post from './Post';
import { db } from './firebase.jsx';
import './App.css'
import Model from '@material-ui/core/Modal';
import { makeStyles, modalStyle } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
function getModelStyle() {
  const top = 50;
  const left = 50;

  return {
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
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyels();
  const [modalStyle] = useState(getModelStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  //useEfect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires...
      setPosts(snapshot.docs.map(doc => doc.data()
      ));
    })
  }, []);

  const signUp = (event) => {

  }

  return (
    <div className="App">
      <Model
        open={open}
        onClose={() => setOpen(false)}>
        <div
          style={modalStyle}
          className={classes.paper}>
          <center>
            <form className="app_signup">
              <p align="center"> 
                <img
                  className="header_Img"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
                  alt=""
                />
              </p>
              <br />
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              <Button onClick={signUp}>Sign Up</Button>
            </form>
          </center>

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
