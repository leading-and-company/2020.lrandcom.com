import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

import Noise from '~/components/base/Noise'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div className={props.className}>
    <Noise className="noise" />
    <ReactSVG src="/images/base/logo_full.svg" />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  background: #131314;
  > .noise {
    ${styles.mixins.absoluteCenter}
    width: 100%;
    height: 100%;
  }
  svg {
    ${styles.mixins.absoluteCenter}
    width: 55rem;
    height: auto;
    ${styles.media.sp} {
      width: 32.5rem;
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
