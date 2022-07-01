import React from 'react'
import styled from 'styled-components'
import Noise from '~/components/base/Noise'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <img src="/images/about/thumbnail.png" alt="" />

    <Noise className="noise" />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  > .noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
