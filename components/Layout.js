import PropTypes from 'prop-types'
import Nav from './Nav'

const siteTitleStyle = {
  marginTop: '1em',
  marginLeft: '0.5em',
}

const layoutStyle = {
  margin: '1em',
}

const Layout = ({ children }) => (
  <div>
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
}

export default Layout
