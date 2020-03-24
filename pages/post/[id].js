import PropTypes from 'prop-types'
import fs from 'fs'
import marked from 'marked'

import Layout from '../../components/Layout'
import Module from '../../components/Module'

function Post({ post }) {
  const markdown = { __html: marked(post) }

  return (
    <Layout>
      <Module>
        <div dangerouslySetInnerHTML={markdown}></div>
      </Module>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fs.promises.readdir('posts')

  const paths = posts.map(post => ({
    params: { id: post.slice(0, -3) },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await fs.promises.readFile(`posts/${params.id}.md`, 'utf8')

  return {
    props: {
      post,
    },
  }
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
}

export default Post
