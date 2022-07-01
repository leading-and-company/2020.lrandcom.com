import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  slug: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.slug}</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  ${styles.mixins.logoStyle}
`

const Container: React.FC<ContainerProps> = props => {
  const slug = useSelector((state: StateTypes) => state.header.slug)
  return <StyledComponent slug={slug} {...props} />
}

export default Container
