import React from 'react'
import styled from 'styled-components'
import Heading from '~/components/about/heading'
import { config } from '~/utils/config'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Heading className="heading">クライアント</Heading>
    <div className="body">
      {config.ourClient.map((companyName, index) => (
        <React.Fragment key={index}>
          <span className="companyName">{companyName}</span>
          {index !== config.ourClient.length - 1 && (
            <span className="slash"> / </span>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  ${styles.media.sp} {
    display: block;
  }
  .heading {
    font-weight: bold;
  }
  .body {
    ${styles.mixins.lhCrop(3)};
    width: 78%;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    ${styles.media.sp} {
      margin-top: 3rem;
      width: 100%;
    }
  }
  > * > .companyName {
    opacity: 0.65;
  }
  > * > .slash {
    letter-spacing: 0.5rem;
    opacity: 0.1;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
