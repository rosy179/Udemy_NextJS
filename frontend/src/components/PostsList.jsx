import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [enteredAuthor, setEnteredAuthor] = useState("Name");
  const [enteredContent, setEnteredContent] = useState("Something...");

  function addPostHandler(postData) {
    setPosts([postData, ...posts]);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function changeContentHandler(event) {
    setEnteredContent(event.target.value);
  }

  function SavePostHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      content: enteredContent,
    };
    addPostHandler(postData);
    onStopPosting();
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onChangeAuthor={changeAuthorHandler}
            onChangeContent={changeContentHandler}
            onCancel={onStopPosting}
            onSubmitPost={SavePostHandler}
          />
        </Modal>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "gray" }}>
          <h3>No posts yet!</h3>
          <p>Let's be the first to share something!</p>
        </div>
      )}
      {posts.length > 0 && (
        <div className={classes.list}>
          {posts.map((post) => (
            <Post
              key={post.author + post.content}
              author={post.author}
              content={post.content}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default PostsList;
