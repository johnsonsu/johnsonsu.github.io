import PropTypes from 'prop-types'
import Nav from './Nav'

const layoutStyle = {}

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Nav />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
