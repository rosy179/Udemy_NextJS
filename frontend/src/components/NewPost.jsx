import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="author">Author</label>
        <textarea
          id="author"
          required
          rows="3"
          onChange={props.onChangeAuthor}
        ></textarea>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          required
          rows="5"
          onChange={props.onChangeContent}
        ></textarea>
      </p>
    </form>
  );
}

export default NewPost;
