import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ArrowRight from '~/components/base/ArrowRight'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Link href="/articles">
      <a>
        <span>記事を読む</span>
        <ArrowRight className="arrowRight" />
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
  > * > .right {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  > * > .circle {
    margin-right: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > span {
    margin-right: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
