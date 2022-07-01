import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import Go from './go'

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
    <Go className="go" />
  </div>
)

const StyledComponent = styled(Component)`
  padding: 6rem;
  .go {
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
