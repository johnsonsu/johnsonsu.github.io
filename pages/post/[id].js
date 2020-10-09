import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import { getAllPostIds, getPostData } from '../../utils/posts'

import utilStyles from '../../styles/utils.module.css'

import Layout from '../../components/Layout'
import Module from '../../components/Module'
import Date from '../../components/Date'
import Comments from '../../components/Comments'

function Post({ postData }) {
  const router = useRouter()
  return (
    <Layout title={postData.title}>
      <Module>
        <span className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </span>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </Module>
      <Module>
        <Comments
          fullUrl={`https://johnsonsu.com${router.asPath}`}
          id={postData.title}
        />
      </Module>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

Post.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    contentHtml: PropTypes.string,
  }),
}

export default Post
