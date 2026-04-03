import classes from "./NewPost.module.css";

function NewPost({ onChangeAuthor, onChangeContent, onCancel, onSubmitPost }) {
  return (
    <form className={classes.form} onSubmit={onSubmitPost}>
      <p>
        <label htmlFor="author">Author</label>
        <textarea
          id="author"
          required
          rows="3"
          onChange={onChangeAuthor}
        ></textarea>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <input
          id="content"
          required
          rows="5"
          onChange={onChangeContent}
        ></input>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
