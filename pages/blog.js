import PropTypes from "prop-types";
import fs from "fs";

import Nav from "./components/Nav";

const Blog = ({ posts }) => {
  return (
    <div>
      <Nav />
      <h1>Blog</h1>

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
    </div>
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
  posts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Blog;
