import PropTypes from 'prop-types'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f2f2f2',
  padding: '2rem',
  marginTop: '2rem',
  borderRadius: '0.4rem',
  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.4)',
}

const Module = ({ children }) => <div style={containerStyle}>{children}</div>

Module.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Module
