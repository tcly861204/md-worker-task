import React from 'react'
import PropTypes from 'prop-types'
import Face from './face.jpg'
import './index.scss'
const Avatar = (props) => {
  const { src = null } = props
  return (
    <span className="avatar">
      <img src={src || Face} />
    </span>
  )
}
Avatar.propTypes = {
  src: PropTypes.string,
}
export default Avatar
