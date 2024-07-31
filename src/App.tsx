import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Post from "./components/post/Post";
import './App.css';

function App() {
  const [posts, setPosts] = useState<{ id: string; title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    const newPost = { id: uuidv4(), title, content };
    if (title.trim() !== "" && content.trim() !== "") {
      setPosts([...posts, newPost]);
    }
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <Post onSubmit={addPost} />
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default App;
