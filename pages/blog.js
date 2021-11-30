import PropTypes from 'prop-types'
import Head from 'next/head'

import { getAllPosts } from '../utils/posts'

import utilStyles from '../styles/utils.module.css'

import Module from '../components/Module'
import Date from '../components/Date'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Module>
        <h1>Blog</h1>

        <ul className={utilStyles.list}>
          {posts.map(({ id, title, date }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <a href={`/post/${id}`}>{title}</a>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            )
          })}
        </ul>
      </Module>
    </>
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
