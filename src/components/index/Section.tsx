import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  title: string
  body: string
  src: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner">
      <div className="contents">
        <div className="title">{props.title}</div>
        <div className="body">
          {props.body.split('\n').map((sentence, index) => (
            <React.Fragment key={index}>
              <div>{sentence}</div>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="video">
        <video src={props.src} preload="none" autoPlay muted playsInline loop />
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  > .inner {
    ${styles.mixins.flexCenter};
    justify-content: space-between;
    margin: 0 auto;
    width: 75vw;
    height: 100%;
  }
  > * > .contents {
    width: 30vw;
  }
  > * > * > .title {
    ${styles.mixins.lhCrop(1.7)};
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    transform: skew(-5deg);
    text-decoration: underline;
  }
  > * > * > .body {
    margin-top: 4.5rem;
    ${styles.mixins.lhCrop(1.6)}
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    opacity: 0.65;
  }
  > * > .video {
    position: relative;
    width: 37.5vw;
    height: 18.75;
  }
  > * > * > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container