import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
  src: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <img className={props.className} decoding="async" src={props.src} />
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
