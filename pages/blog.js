import PropTypes from 'prop-types'

import { getAllPosts } from '../utils/posts'

import Layout from '../components/Layout'
import Module from '../components/Module'

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <Module>
        <h1>Blog</h1>

        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <a href={`/post/${encodeURIComponent(post.id)}`}>
                  {post.title}
                </a>
              </li>
            )
          })}
        </ul>
      </Module>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
}

export default Blog
