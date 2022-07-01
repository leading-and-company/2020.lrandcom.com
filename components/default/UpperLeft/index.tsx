import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import Logo from './logo'
import Back from './back'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  type: string
  to: string
  text: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {(props.type === 'logo' && <Logo className="logo" />) || (
      <Back className="back" to={props.to} text={props.text} />
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

const Container: React.FC<ContainerProps> = props => {
  const upperLeft = useSelector((state: StateTypes) => state.header.upperLeft)
  return (
    <StyledComponent
      type={upperLeft.type}
      to={upperLeft.to}
      text={upperLeft.text}
      {...props}
    />
  )
}

export default Container
