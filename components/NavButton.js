import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const buttonStyle = {
  display: 'flex',
  marginRight: '1em',
}

const linkStyle = {
  textDecoration: 'none',
  padding: '0.2em 0.4em',
  fontSize: '1.2em',
  color: '#666',
}

const linkSelectedStyle = {
  color: '#333',
}

const NavButton = ({ href, title }) => {
  const router = useRouter()
  const isActive =
    (href === '/' && router.pathname === href) ||
    (href !== '/' && router.pathname.startsWith(href))
  return (
    <div style={buttonStyle}>
      <Link href={href} as={href}>
        <a
          style={{
            ...linkStyle,
            ...(isActive ? linkSelectedStyle : {}),
          }}
        >
          {title}
        </a>
      </Link>
    </div>
  )
}
NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavButton
