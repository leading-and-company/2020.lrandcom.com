import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '~/utils/config'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <FontAwesomeIcon className="circle" icon={config.icons.circle} />
    <FontAwesomeIcon className="circle" icon={config.icons.circle} />
    <FontAwesomeIcon className="arrow" icon={config.icons.arrowRight} />
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  > .circle {
    font-size: 0.5rem;
    opacity: 0.5;
  }
  > .circle:not(:first-child) {
    margin-left: 0.5rem;
  }
  > .arrow {
    margin-left: 0.5rem;
    font-size: 2rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
