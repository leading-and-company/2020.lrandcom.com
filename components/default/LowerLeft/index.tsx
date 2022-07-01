import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { StateTypes } from '~/store'

import Go from './go'

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
    <Go className="go" />
  </div>
)

const StyledComponent = styled(Component)`
  padding: 6rem;
  .go {
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
