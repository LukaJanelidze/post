import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Post from "./components/post/Post";
import './App.css';

function App() {
  const [posts, setPosts] = useState<{ id: string; title: string; content: string }[]>([]);
  
  const addPost = (title: string, content: string) => {
    const newPost = { id: uuidv4(), title, content };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Post onSubmit={addPost} />
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
