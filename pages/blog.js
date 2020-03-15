import PropTypes from "prop-types";
import fs from "fs";

const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => {
        const name = post.slice(0, -3);
        return (
          <li key={name}>
            <a href={`/post/${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const posts = await fs.promises.readdir("posts");

  return {
    props: {
      posts
    }
  };
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string)
};

export default Blog;
