import NavButton from './NavButton'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  padding: '1em',
  borderRadius: '0.4em',
  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.5)',
}

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1em',
  borderRadius: '1.5em',
  height: '2em',
  width: '2em',
  fontSize: '1.4em',
  backgroundColor: '#fefefe',
}

const emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺']

const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

const Nav = () => (
  <div style={containerStyle}>
    <div style={iconStyle}>{randomEmoji()}</div>
    <NavButton href="/about" title="About" />
    <NavButton href="/post" title="Blog" />
  </div>
)

export default Nav
