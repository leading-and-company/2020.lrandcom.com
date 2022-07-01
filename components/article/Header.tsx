import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { config } from '~/utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Author from '~/components/article/Author'
import { functions } from '~/utils/functions'

type ContainerProps = {
  className: string
  title: string
  thumbnail: string
  publishedAt: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="thumbnail">
      <img src={props.thumbnail} />
      <div className="cover">
        <div className="publishedAt">{functions.date(props.publishedAt)}</div>
        <div className="title">{props.title}</div>
        <Author className="author" />
      </div>
    </div>
    <div className="scroll">
      <FontAwesomeIcon icon={config.icons.arrowDown} />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  ${styles.media.sp} {
    height: auto;
  }
  > .thumbnail {
    position: relative;
    margin-top: 15.5rem;
    width: 100%;
    height: calc(100% - 31rem);
    overflow: hidden;
    ${styles.media.sp} {
      margin-top: 9.5rem;
      height: 47.5rem;
    }
  }
  > .thumbnail > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
  > .thumbnail > .cover {
    ${styles.mixins.flexCenter}
    flex-direction: column;
    position: absolute;
    top: 0;
    padding: 15%;
    width: 100%;
    height: 100%;
    ${styles.media.sp} {
      padding: 10%;
    }
    .publishedAt {
      ${styles.mixins.logoStyle}
    }
    .title {
      ${styles.mixins.lhCrop(1.8)}
      margin-top: 6rem;
      font-size: 2.8rem;
      font-weight: bold;
      text-align: center;
      letter-spacing: 0.2rem;
      transform: skew(-5deg);
      ${styles.media.sp} {
        margin-top: 6rem;
        font-size: 2rem;
      }
    }
    .author {
      margin-top: 6rem;
    }
  }
  > .scroll {
    ${styles.mixins.flexCenter}
    width: 100%;
    height: 15.5rem;
    font-size: 2.5rem;
    ${styles.media.sp} {
      height: 9.5rem;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
