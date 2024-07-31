import React, { useState, useRef, useEffect } from 'react';
import "./Post.css";

interface PostProps {
  post?: {
    id: string;
    title: string;
    content: string;
  };
  onSubmit?: (title: string, content: string) => void;
  onDelete?: (id: string) => void;
}

const Post: React.FC<PostProps> = ({ post, onSubmit, onDelete }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(title, content);
      setTitle("");
      setContent("");
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
    }
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
    }
  }, [title, content]);

  if (post) {
    return (
      <div className='posted-display'>
        <div>
          <h2 className='posted-title'>{post.title}</h2>
        </div>
        <hr />
        <div>
          <p className='posted-content'>{post.content}</p>
        </div>
        {onDelete && (
          <button className='delete-button' onClick={() => onDelete(post.id)}>Delete</button>
        )}
      </div>
    );
  }

  return (
    <form className='post-box' onSubmit={handleSubmit}>
      <div className='post-box-title'>
        <label htmlFor="title" className='title'>Title:</label>
        <textarea
          ref={titleRef}
          className='title-input'
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>
      <div className='post-box-content'>
        <label htmlFor="content" className='content'>Content:</label>
        <textarea
          ref={contentRef}
          className='content-input'
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the content"
        />
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default Post;
