import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <span>{props.children}</span>
  </div>
)

const StyledComponent = styled(Component)`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  opacity: 0.65;
  ${styles.media.sp} {
    font-size: 1.4rem;
  }
  > span {
    ${styles.mixins.lhCrop(2)}
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
