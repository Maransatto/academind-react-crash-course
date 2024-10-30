import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const authors = [
  { name: "Fernando", body: "React is awesome" },
  { name: "Miguel", body: "Hey dad!" },
];

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        {authors.map((author, index) => (
          <Post key={index} author={author.name} body={author.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
