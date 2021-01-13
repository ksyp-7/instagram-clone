import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <div className="header">
      <img 
      className="header_Img"
      src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
      alt=""
      />
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
