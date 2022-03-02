import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import './index.scss'
const ButtonGrop = (props) => {
  const { data, active } = props
  return (
    <div className="button-group">
      {data.map((item, index) => {
        return (
          <Button
            {...item}
            key={index}
            active={active ? active : index === 0 && item.value}
          ></Button>
        )
      })}
    </div>
  )
}
ButtonGrop.propTypes = {
  data: PropTypes.array,
  active: PropTypes.string,
}
export default ButtonGrop
