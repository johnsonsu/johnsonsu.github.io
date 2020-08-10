import PropTypes from 'prop-types'
import fs from 'fs'
import marked from 'marked'

import Layout from '../../components/Layout'
import Module from '../../components/Module'

function Post({ post, title }) {
  const markdown = { __html: marked(post) }

  return (
    <Layout title={title}>
      <Module>
        <div dangerouslySetInnerHTML={markdown}></div>
      </Module>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fs.promises.readdir('posts')

  const paths = posts
    .filter(post => !post.startsWith('.')) // hide hidden files
    .map(post => ({
      params: { id: encodeURIComponent(post.slice(0, -3)) }, // removes `.md`
    }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await fs.promises.readFile(
    `posts/${decodeURIComponent(params.id)}.md`,
    'utf8'
  )

  return {
    props: {
      post,
      title: params.id,
    },
  }
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Post
