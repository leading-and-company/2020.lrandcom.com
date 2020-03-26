import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.children}</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.lhCrop(1.7)};
  font-size: 4.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  transform: skew(-5deg);
  text-decoration: underline;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container