import PropTypes from 'prop-types'
import Link from 'next/link'
const buttonStyle = {
  display: 'flex',
  marginRight: '0.8em',
}

const linkStyle = {
  textDecoration: 'none',
  color: '#444',
  textAlign: 'center',
}

const NavButton = ({ href, title }) => (
  <div style={buttonStyle}>
    <Link href={href} as={href}>
      <a style={linkStyle}>{title}</a>
    </Link>
  </div>
)

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavButton
