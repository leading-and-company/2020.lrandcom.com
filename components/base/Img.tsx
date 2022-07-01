import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
  src: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <img className={props.className} src={props.src} decoding="async" />
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
