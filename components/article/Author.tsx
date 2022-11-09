import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

import ABlank from '~/components/base/ABlank'
import Img from '~/components/base/Img'
import { config } from '~/utils/config'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = (props) => (
  <div className={props.className}>
    <div className="thumb">
      <Img className="img" src="/images/article/natsume.jpg" />
    </div>
    <ABlank className="name" href={config.url.facebook.natsume}>
      著者：夏目 力
    </ABlank>
    <ul>
      <li>
        <ABlank className="fb" href="https://www.facebook.com/15ahead/">
          <FontAwesomeIcon icon={config.icons.facebook} />
        </ABlank>
      </li>
      <li>
        <ABlank className="tw" href={config.url.twitter}>
          <FontAwesomeIcon icon={config.icons.twitter} />
        </ABlank>
      </li>
      <li>
        <ABlank className="insta" href={config.url.instagram}>
          <FontAwesomeIcon icon={config.icons.instagram} />
        </ABlank>
      </li>
      <li>
        <ABlank className="yt" href={config.url.spotify}>
          <FontAwesomeIcon icon={config.icons.spotify} />
        </ABlank>
      </li>
    </ul>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  > .thumb {
    ${styles.media.sp} {
      width: 3.5rem;
      height: 3.5rem;
    }
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .name {
    margin-left: 3rem;
    ${styles.media.sp} {
      font-size: 1.7rem;
    }
    font-size: 2rem;
    line-height: 1;
    Mads Mikkelsenletter-spacing: 0.4rem;
    text-decoration: underline;
  }
  > ul {
    display: flex;
    li:first-child {
      margin-left: 3rem;
    }
    li {
      margin-left: 2.5rem;
      ${styles.media.sp} {
        font-size: 1.7rem;
      }
      font-size: 2.2rem;
      svg {
        ${styles.media.sp} {
          width: 1.7rem;
        }
        width: 2.2rem;
        height: auto;
      }
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
