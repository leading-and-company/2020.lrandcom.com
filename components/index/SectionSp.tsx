import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import Button from '~/components/base/Button'
import IncludeBr from '~/components/base/IncludeBr'
import Video from '~/components/base/Video'

type ContainerProps = {
  button?: string
  className: string
  description: string
  link?: {
    as: string
    href: string
  }
  src: string
  title: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div className={props.className}>
    <div className="title">{props.title}</div>
    <div className="videoWrapper">
      <Video className="video" src={props.src} />
    </div>
    <IncludeBr className="description" text={props.description} />
    {props.button && (
      <Link as={props.link?.as || ''} href={props.link?.href || ''}>
        <a>
          <Button className="button">{props.button}</Button>
        </a>
      </Link>
    )}
  </div>
)

const StyledComponent = styled(Component)`
  > .title {
    font-size: 2.6rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.5rem;
    transform: skew(-5deg);
  }
  > .videoWrapper {
    margin-top: 3rem;
    width: 100%;
    height: 45rem;
    opacity: 0.9;
    overflow: hidden;
  }
  > .description {
    margin-top: 3rem;
  }
  > a {
    > .button {
      margin-top: 3rem;
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
