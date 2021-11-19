import PropTypes from 'prop-types'
import Head from 'next/head'

import Nav from './Nav'

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1em 0.5em',
  maxWidth: '800px',
  margin: 'auto',
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
    <div style={layoutStyle}>
      <Nav />
      {children}
    </div>
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
