import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  gaugeRef: React.MutableRefObject<HTMLDivElement | null>
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="trace" />
    <div className="gauge" ref={props.gaugeRef} />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  > .trace {
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.05;
  }
  > .gauge {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.05;
    transform: scaleX(0);
    transform-origin: center left;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const gaugeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const page = document.getElementById('page')
    if (page) {
      const scrollMax = page.scrollWidth - page.clientWidth
      const onscroll = (): void => {
        if (gaugeRef.current) {
          gaugeRef.current.style.transform = `scaleX(${page.scrollLeft /
            scrollMax})`
        }
      }
      page.addEventListener('scroll', onscroll)
      return (): void => {
        page.removeEventListener('scroll', onscroll)
      }
    }
  }, [])
  return <StyledComponent gaugeRef={gaugeRef} {...props} />
}

export default Container
