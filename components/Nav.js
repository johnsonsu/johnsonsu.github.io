import { useState, useEffect } from 'react'
import NavButton from './NavButton'
import { GITHUB_URL, LINKDIN_URL } from '../constants/url'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
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

const navGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

const externalLinkStyle = {
  marginLeft: '0.8em',
  filter:
    'invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)',
}

const emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺']

const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

const Nav = () => {
  const [emoji, setEmoji] = useState(null)

  useEffect(() => {
    setEmoji(randomEmoji)
  }, [])

  return (
    <div style={containerStyle}>
      <div style={navGroupStyle}>
        <div style={iconStyle}>{emoji}</div>
        <NavButton href="/" title="About" />
        <NavButton href="/blog" title="Blog" />
      </div>

      <div style={navGroupStyle}>
        <a style={externalLinkStyle} href={GITHUB_URL}>
          <img src="/github.svg" height="24em" />
        </a>
        <a style={externalLinkStyle} href={LINKDIN_URL}>
          <img src="/linkedin.svg" height="24em" />
        </a>
      </div>
    </div>
  )
}
export default Nav
