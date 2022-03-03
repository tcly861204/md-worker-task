import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import './index.scss'
const ButtonGrop = (props) => {
  const { data, active, className, onChange } = props
  const [activeName, setActiveName] = useState(active || data[0].value)
  return (
    <div className={['button-group clearfix', className].join(' ')}>
      {data.map((item, index) => {
        return (
          <Button
            {...item}
            key={index}
            active={activeName}
            onClick={(value) => {
              setActiveName(value)
              onChange && typeof onChange === 'function' && onChange(value)
            }}
          ></Button>
        )
      })}
    </div>
  )
}
ButtonGrop.propTypes = {
  data: PropTypes.array,
  active: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
export default ButtonGrop
