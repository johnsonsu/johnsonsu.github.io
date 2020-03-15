import fs from "fs";

function Post({ post }) {
  return <div>{post}</div>;
}

export async function getStaticPaths() {
  const posts = await fs.promises.readdir("posts");

  const paths = posts.map(post => ({
    params: { id: post.slice(0, -3) }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fs.promises.readFile(`posts/${params.id}.md`, "utf8");

  return {
    props: {
      post
    }
  };
}

export default Post;
