import Link from 'next/link'
import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div className={props.className}>
    <Link href="/">
      <a>
        <ReactSVG src="/images/base/logo.svg" />
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
