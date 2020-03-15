import PropTypes from 'prop-types'
import Link from 'next/link'

const NavButton = ({ href, title }) => (
  <Link href={href} as={href}>
    <a>{title}</a>
  </Link>
)

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavButton
