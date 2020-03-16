import NavButton from './NavButton'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#f2f2f2',
  padding: '1em',
  margin: '1em',
  borderRadius: '0.4em',
}

const Nav = () => (
  <div style={containerStyle}>
    <NavButton href="/about" title="About" />
    <NavButton href="/blog" title="Blog" />
  </div>
)

export default Nav
