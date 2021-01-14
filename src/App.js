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
      <Post
       imgUrl="https://picsum.photos/350/200"
       username="i.m._k7"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
      <Post
       imgUrl="https://picsum.photos/350/201"
       username="ksyp.7"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
       <Post
       imgUrl="https://picsum.photos/350/202"
       username="yash_1"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
       <Post
       imgUrl="https://picsum.photos/350/203"
       username="raj"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
       <Post
       imgUrl="https://picsum.photos/351/200"
       username="b_7"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
       <Post
       imgUrl="https://picsum.photos/352/200"
       username="luci"
       caption="ab abcd abcdefg abcgedhd dhksa jsljnv sdnkdd"
       />
    </div>
  );
}

export default App;
