import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '~/utils/config'
import { styles } from '~/utils/styles'
import Noise from '~/components/base/Noise'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Noise className="noise" />
    <a href="mailto:hello@lrandcom.com">
      <FontAwesomeIcon icon={config.icons.mail} />{' '}
      <span>HELLO@LRANDCOM.COM</span>
    </a>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  position: relative;
  background: #131314;
  > .noise {
    ${styles.mixins.absoluteCenter}
    width: 100%;
    height: 100%;
  }
  > a {
    display: flex;
    align-items: center;
    font-size: 3rem;
    ${styles.media.sp} {
      font-size: 2rem;
    }
  }
  > * > span {
    ${styles.mixins.logoStyle}
    display: inline-block;
    margin-left: 5rem;
    font-size: 5rem;
    letter-spacing: 1rem;
    ${styles.media.sp} {
      margin-left: 2rem;
      font-size: 2.6rem;
      letter-spacing: 0.5rem;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
