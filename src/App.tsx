import { useState } from 'react';
import Post from "./components/post/Post";
import './App.css';

function App() {
  const [posts, setPosts] = useState<{ id: number; title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    const newPost = { id: posts.length + 1, title, content };
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
