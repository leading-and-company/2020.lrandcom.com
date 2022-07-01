import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { useObserve } from '~/hooks/useObserve'
import { animations } from '~/utils/animations'

type ContainerProps = {
  className: string
  src: string
}
type ComponentProps = {
  display: boolean
  refs: {
    root: React.MutableRefObject<HTMLDivElement | null>
    video: React.MutableRefObject<HTMLVideoElement | null>
  }
} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div ref={props.refs.root} className={props.className}>
    {props.display && (
      <video
        ref={props.refs.video}
        loop
        muted
        playsInline
        preload="none"
        src={props.src}
      />
    )}
  </div>
)

const StyledComponent = styled(Component)`
  opacity: 0;
  transform: translateY(15rem) scale(0.9);
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  const [display, setDisplay] = useState(false)
  const refs = {
    root: useRef<HTMLDivElement>(null),
    video: useRef<HTMLVideoElement>(null),
  }
  useObserve({
    deps: [refs.root, display],
    observeIn: () => {
      if (!display) setDisplay(true)
    },
    ref: refs.root,
  })
  useEffect(() => {
    if (display && refs.root.current && refs.video.current) {
      animations.opacity(refs.root.current, 1, 1, 'InOut')
      animations.y(refs.root.current, 0, 2, 'Out')
      animations.scale(refs.root.current, 1, 2, 'Out')
      refs.video.current.load()
      refs.video.current.addEventListener('canplay', () => {
        if (refs.video.current) refs.video.current.play()
      })
    }
  }, [display, refs.root, refs.video])
  return <StyledComponent display={display} refs={refs} {...props} />
}

export default Container
