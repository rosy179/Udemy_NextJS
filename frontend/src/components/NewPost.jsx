import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="author">Author</label>
        <textarea id="author" required rows="3"></textarea>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" required rows="5"></textarea>
      </p>
    </form>
  );
}

export default NewPost;
