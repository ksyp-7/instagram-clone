import React, { useState, useEffect } from 'react';
import Post from './Post';
import {db} from './firebase.jsx';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  //useEfect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires...
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div className="App">

      <div className="header">
        <img
          className="header_Img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
          alt=""
        />
      </div>
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
