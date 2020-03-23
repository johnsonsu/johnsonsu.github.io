import PropTypes from 'prop-types'
import Head from 'next/head'

import Nav from './Nav'

const siteTitleStyle = {
  marginTop: '1em',
  marginLeft: '0.5em',
}

const layoutStyle = {
  margin: '1em',
}

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <h1 style={siteTitleStyle}>🦾</h1>
    <Nav />
    <div style={layoutStyle}>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
