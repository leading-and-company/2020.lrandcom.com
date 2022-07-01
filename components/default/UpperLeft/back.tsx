import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ArrowLeft from '~/components/base/ArrowLeft'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
  to: string
  text: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Link href={props.to}>
      <a>
        <ArrowLeft className="arrowLeft" />
        <span>{props.text}</span>
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  > a {
    display: flex;
    align-items: center;
  }
  > * > span {
    margin-left: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
