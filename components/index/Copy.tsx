import React from 'react'
import styled from 'styled-components'
import Noise from '~/components/base/Noise'
import { styles } from '~/utils/styles'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import Video from '~/components/base/Video'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  sp: boolean
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="videoWrapper">
      {(props.sp && (
        <Video
          className="video"
          src="https://lrandcom.kagoyacloud.com/static/index/mobile.mp4"
        />
      )) || (
        <Video
          className="video"
          src="https://lrandcom.kagoyacloud.com/static/index/pc.mp4"
        />
      )}
      <Noise className="noise" />
    </div>
    <div className="title">
      {(props.sp && (
        <>
          商業的な匂いがするものは、
          <br />
          すべて消し去れ！
        </>
      )) || <>商業的な匂いがするものは、すべて消し去れ！</>}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  position: relative;
  overflow: hidden;
  > .videoWrapper {
    position: relative;
    width: 75rem;
    height: 37.5rem;
    opacity: 0.7;
    ${styles.media.sp} {
      width: 100%;
      height: 47.5rem;
    }
    > .noise {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  > .title {
    ${styles.mixins.lhCrop(1.8)}
    ${styles.mixins.flexCenter};
    position: absolute;
    top: -0.3rem;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 4.2rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.5rem;
    transform: skew(-5deg);
    ${styles.media.sp} {
      font-size: 2.6rem;
      line-height: 1.8;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const sp = useSelector((state: StateTypes) => state.media.sp)
  return <StyledComponent sp={sp} {...props} />
}

export default Container
