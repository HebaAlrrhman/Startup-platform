import { useState, useEffect } from "react";
import { Post } from "./Post";
import { Form } from "./Form";
import { Replays } from "./Replays";
import React from "react";

export function Posts() {
  
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState(
    localStorage.getItem("POSTS")
      ? JSON.parse(localStorage.getItem("POSTS"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("POSTS", JSON.stringify(posts));
  }, [posts]);

  function handleAdd() {
    
    if (!content ) return;
    setPosts([
      {
        id: crypto.randomUUID(),
        image:image,
       
        content: content,
        date: new Date().toISOString(),
        replay: []
      },
      ...posts
    ]);
   
    setContent("");
    setImage("");
  }

  function handleDeletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  return (
    <main>
      <h2>You can add Feedback </h2>
      <Form
      
        content={content}
        setContent={setContent}
        image={image}
        setImage={setImage}
        handleAdd={handleAdd}
      />
      <br />
      <hr />

      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <Post
            id={post.id}
            img="https://semantic-ui.com/images/avatar/small/matt.jpg"
            
            image={post.image}
            date={post.date}
            content={post.content}
            handleDeletePost={handleDeletePost}
          />
          <Replays />
        </React.Fragment>
      ))}
    </main>
  );
}

