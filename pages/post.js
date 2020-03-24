import PropTypes from 'prop-types'
import fs from 'fs'

import Layout from '../components/Layout'
import Module from '../components/Module'

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <Module>
        <h1>Blog</h1>

        <ul>
          {posts.map(post => {
            const name = post.slice(0, -3)
            return (
              <li key={name}>
                <a href={`/post/${name}`}>{name.replace('-', ' ')}</a>
              </li>
            )
          })}
        </ul>
      </Module>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fs.promises.readdir('posts')

  return {
    props: {
      posts,
    },
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Blog