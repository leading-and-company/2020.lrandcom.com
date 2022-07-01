import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner" />
  </div>
)

const StyledComponent = styled(Component)`
  background: url('/images/base/noise.png');
  background-size: 320px 320px;
  opacity: 0.5;
  animation: 250ms steps(10, end) 0s infinite alternate-reverse none running
    noise-animation;
  @keyframes noise-animation {
    0% {
      background-position: 0% 0%;
    }
    10% {
      background-position: -5% -5%;
    }
    20% {
      background-position: -10% 5%;
    }
    30% {
      background-position: 5% -10%;
    }
    40% {
      background-position: -5% 15%;
    }
    50% {
      background-position: -10% 5%;
    }
    60% {
      background-position: 5% 5%;
    }
    70% {
      background-position: 0% 10%;
    }
    80% {
      background-position: -5% -5%;
    }
    90% {
      background-position: 10% 5%;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
