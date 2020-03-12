import React from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="bo1" />
    <div className="bo2" />
    <div className="bo3" />
  </div>
)

const StyledComponent = styled(Component)`
  position: fixed;
  top: 6.8rem;
  right: 7.5rem;
  width: 7rem;
  height: 3.5rem;
  transform: skew(-10deg);
  > .bo1 {
    width: 100%;
    height: 0.3rem;
    background: white;
    opacity: 0.5;
  }
  > .bo2 {
    margin-top: 1.3rem;
    width: 100%;
    height: 0.3rem;
    background: white;
  }
  > .bo3 {
    margin-top: 1.3rem;
    width: 100%;
    height: 0.3rem;
    background: white;
    opacity: 0.5;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="humberger" {...props} />
}

export default Container