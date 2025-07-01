import React from 'react'
import { Button as ButtonUI } from '@1hive/1hive-ui'

export default function Button({ children, ...props }: any) {
  return <ButtonUI {...props}>{children}</ButtonUI>
}

Button.defaultProps = {
  size: 'small',
  mode: 'normal',
  disabled: false,
  loading: false,
  onClick: () => {
    console.log('clicked')
  },
  children: 'Button',
  className: '',
  style: {
    background: '#aaaaaa !important',
  },
}