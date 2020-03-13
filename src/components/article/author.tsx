import React from 'react'
import styled from 'styled-components'
import Img from '~/components/base/Img'
import config from '~/utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ABlank from '~/components/base/ABlank'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="thumb">
      <Img className="img" src={config.article.author.src} />
    </div>
    <div className="name">{config.article.author.name}</div>
    <ul>
      <li>
        <ABlank className="fb" href={config.url.facebook.natsume}>
          <FontAwesomeIcon icon={config.article.author.icons.facebook} />
        </ABlank>
      </li>
      <li>
        <ABlank className="tw" href={config.url.twitter}>
          <FontAwesomeIcon icon={config.article.author.icons.twitter} />
        </ABlank>
      </li>
      <li>
        <ABlank className="insta" href={config.url.instagram}>
          <FontAwesomeIcon icon={config.article.author.icons.instagram} />
        </ABlank>
      </li>
      <li>
        <ABlank className="yt" href={config.url.youtube}>
          <FontAwesomeIcon icon={config.article.author.icons.youtube} />
        </ABlank>
      </li>
    </ul>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  > .thumb {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  > * > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > .name {
    margin-left: 3rem;
    font-size: 1.4rem;
    line-height: 1;
    letter-spacing: 0.4rem;
  }
  > ul {
    display: flex;
  }
  > * > li:first-child {
    margin-left: 3rem;
  }
  > * > li {
    margin-left: 2.5rem;
    font-size: 1.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
