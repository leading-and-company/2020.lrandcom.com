import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
  href: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <a
    className={props.className}
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.children}
  </a>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
