import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "gray" }}>
          <h3>No posts yet!</h3>
          <p>Let's be the first to share something!</p>
        </div>
      )}
      {posts.length > 0 && (
        <div className={classes.posts}>
          {posts.map((post) => (
            <div
              key={post.author + post.content}
              className={classes.animatedPost}
              // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Post author={post.author} content={post.content} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PostsList;
