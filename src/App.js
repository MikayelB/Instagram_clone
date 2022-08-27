import "./App.css";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app_header">
        <img
          className="app_header_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          alt="image not loading"
        />
      </div>

      {/* Posts */}
      <Post
        username="Mikayel"
        description="first post"
        imageURL="https://t4.ftcdn.net/jpg/03/92/71/99/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg"
      />

      <Post
        username="Jesus"
        description="My first church wanted to share with yall"
        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%D4%B7%D5%BB%D5%B4%D5%AB%D5%A1%D5%AE%D5%B6%D5%AB_%D5%84%D5%A1%D5%B5%D6%80_%D5%8F%D5%A1%D5%B3%D5%A1%D6%80.jpg/1280px-%D4%B7%D5%BB%D5%B4%D5%AB%D5%A1%D5%AE%D5%B6%D5%AB_%D5%84%D5%A1%D5%B5%D6%80_%D5%8F%D5%A1%D5%B3%D5%A1%D6%80.jpg"
      />

      <Post
        username="Edgy boy"
        description="flying to the moon"
        imageURL="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg"
      />

      <Post
        username="abcDeF"
        description="no comment"
        imageURL="https://img.freepik.com/free-vector/english-alphabets_1308-2901.jpg?w=2000"
      />

      {/* Posts */}
    </div>
  );
}

export default App;
