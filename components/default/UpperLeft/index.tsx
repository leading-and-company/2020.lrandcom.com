import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { StateTypes } from '~/store'
import { styles } from '~/utils/styles'

import Back from './back'
import Logo from './logo'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  text: string
  to: string
  type: string
} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div className={props.className}>
    {(props.type === 'logo' && <Logo className="logo" />) || (
      <Back className="back" text={props.text} to={props.to} />
    )}
  </div>
)

const StyledComponent = styled(Component)`
  padding: 6rem;
  ${styles.media.sp} {
    padding: 3rem;
  }
  > .logo svg {
    width: auto;
    height: 3.5rem;
    vertical-align: middle;
  }
  .back {
    height: 3.5rem;
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  const upperLeft = useSelector((state: StateTypes) => state.header.upperLeft)
  return (
    <StyledComponent
      text={upperLeft.text}
      to={upperLeft.to}
      type={upperLeft.type}
      {...props}
    />
  )
}

export default Container
