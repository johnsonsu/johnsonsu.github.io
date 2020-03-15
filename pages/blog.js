import fs from "fs";
function Blog({ posts }) {
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
}

export async function getStaticProps() {
  const posts = await fs.promises.readdir("posts");

  return {
    props: {
      posts
    }
  };
}

export default Blog;
