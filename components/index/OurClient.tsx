import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { config } from '~/utils/config'
import Card from '~/components/index/card'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="head">
      <div className="title">クライアント</div>
      <div className="description">※ 敬称略、順不同</div>
    </div>
    <Card className="card">
      {config.ourClient.map((companyName, index) => (
        <React.Fragment key={index}>
          <span className="companyName">{companyName}</span>
          {index !== config.ourClient.length - 1 && (
            <span className="slash"> / </span>
          )}
        </React.Fragment>
      ))}
    </Card>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  ${styles.media.sp} {
    display: block;
  }
  > .head {
    .title {
      font-size: 4.2rem;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 0.5rem;
      transform: skew(-5deg);
      ${styles.media.sp} {
        font-size: 2.6rem;
      }
    }
    .description {
      margin-top: 4.5rem;
      width: 100%;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      white-space: pre-wrap;
      opacity: 0.65;
      ${styles.media.sp} {
        margin-top: 3rem;
      }
    }
  }
  > .card {
    ${styles.mixins.lhCrop(3)};
    margin-left: 7.5vw;
    width: 37.5vw;
    ${styles.media.sp} {
      margin: 3rem 0 0;
      width: 100%;
    }
    .companyName {
      opacity: 0.65;
    }
    .slash {
      letter-spacing: 0.5rem;
      opacity: 0.1;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
