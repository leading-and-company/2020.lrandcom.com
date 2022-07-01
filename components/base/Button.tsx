import React, { useRef } from 'react'
import styled from 'styled-components'
import { animations } from '~/utils/animations'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    button: React.MutableRefObject<HTMLButtonElement | null>
    text: React.MutableRefObject<HTMLSpanElement | null>
  }
  over: () => void
  out: () => void
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <button
    className={props.className}
    ref={props.refs.button}
    onMouseOver={props.over}
    onMouseOut={props.out}
  >
    <span ref={props.refs.text}>{props.children}</span>
  </button>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  position: relative;
  padding: 1.2rem 4.8rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  border: 0.15rem solid white;
  transform: skew(-3.5deg);
`

const Container: React.FC<ContainerProps> = props => {
  const refs = {
    button: useRef<HTMLButtonElement>(null),
    text: useRef<HTMLSpanElement>(null)
  }

  const over = (): void => {
    // if (('touchstart' == e.type && L) || ('mouseover' == e.type && !L)) return // PCのタッチと、モバイルのマウスオーバーはリターン
    if (refs.button.current && refs.text.current) {
      animations.backgroundColor(refs.button.current, 'white', 0.3, 'Out')
      animations.color(refs.text.current, 'black', 0.3, 'Out')
      animations.boxShadow(
        refs.button.current,
        '0px 0px 50px rgba(255,255,255,.5)',
        0.2,
        'Out'
      )
    }
  }

  const out = (): void => {
    // if (('touchend' == e.type && L) || ('mouseout' == e.type && !L)) return // PCのタッチと、モバイルのマウスオーバーはリターン
    if (refs.button.current && refs.text.current) {
      animations.backgroundColor(refs.button.current, 'transparent', 0.3, 'Out')
      animations.color(refs.text.current, 'white', 0.3, 'Out')
      animations.boxShadow(
        refs.button.current,
        '0px 0px 0px rgba(255,255,255,.5)',
        0.2,
        'Out'
      )
    }
  }
  return <StyledComponent refs={refs} over={over} out={out} {...props} />
}

export default Container
