import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.list}>
        <Post author="John Doe" content="This is my first post!" />
        <Post author="Jane Smith" content="Hello everyone, nice to meet you!" />
        <Post
          author="Alice Johnson"
          content="Just had a great day at the park!"
        />
      </ul>
    </>
  );
}

export default PostsList;
