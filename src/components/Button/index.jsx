import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
const Button = (props) => {
  const { label, onClick, active, value } = props
  return (
    <button
      className={['button', active === value && 'active'].join(' ')}
      onClick={(e) => {
        onClick && typeof onClick === 'function' && onClick()
        e.preventDefault()
      }}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.string,
  value: PropTypes.string,
}

export default Button
