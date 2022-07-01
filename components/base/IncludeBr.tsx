import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
  text: string
}
type ComponentProps = {
  splitted: string[]
  last: number
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.splitted.map((sentence, index) => (
      <React.Fragment key={index}>
        <p>{sentence}</p>
        {index !== props.last && (
          <>
            <div className="br" />
          </>
        )}
      </React.Fragment>
    ))}
  </div>
)

const StyledComponent = styled(Component)`
  > p {
    ${styles.mixins.lhCrop(1.6)}
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    opacity: 0.65;
    ${styles.media.sp} {
      ${styles.mixins.lhCrop(2)}
    }
  }
  > .br {
    height: calc(1.4rem * 1.6);
    ${styles.media.sp} {
      height: calc(1.6rem * 2);
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const splitted = props.text.split('\n')
  const last = splitted.length - 1
  return <StyledComponent splitted={splitted} last={last} {...props} />
}

export default Container
