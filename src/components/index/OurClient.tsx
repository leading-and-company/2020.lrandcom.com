import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import Heading1 from '~/components/base/Heading1'
import { config } from '~/utils/config'
import Description from '~/components/index/description'
import Card from '~/components/index/card'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="head">
      <Heading1 className="title">{config.index.ourClient.title}</Heading1>
      <Description className="description">
        {config.index.ourClient.description}
      </Description>
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
  > * > .description {
    margin-top: 4.5rem;
    width: 100%;
  }
  > .card {
    ${styles.mixins.lhCrop(3)};
    margin-left: 7.5vw;
    width: 37.5vw;
  }
  > .card > .companyName {
    opacity: 0.65;
  }
  > .card > .slash {
    letter-spacing: 0.5rem;
    opacity: 0.1;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
