import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store, { StateTypes } from '~/store'
import { AppProps } from 'next/app'
import { styles } from '~/utils/styles'
import Slug from '~/components/default/Slug'
import Noise from '~/components/base/Noise'
import UpperLeft from '~/components/default/UpperLeft'
// import LowerLeft from '~/components/_app/LowerLeft'
import Navigation from '~/components/default/Navigation'
import styled from 'styled-components'
import { useWindowSize } from '~/hooks/useWindowSize'

type ContainerProps = AppProps
type ComponentProps = {
  className: string
  sp: boolean
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <>
    <Provider store={store}>
      <div className={props.className}>
        <Noise className="noise" />
        <div id="page">
          <props.Component {...props.pageProps} />
        </div>
        <div className="faderTop">
          <div className="fade" />
        </div>
        <div className="faderBottom">
          <div className="fade" />
        </div>
        {!props.sp && <Slug className="slug" />}
        <UpperLeft className="upperLeft" />
        {/* <LowerLeft className="lowerLeft" /> */}
        <Navigation className="navigation" />
      </div>
    </Provider>
  </>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
  > .noise {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  > #page {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-overflow-style: none; /* IE, Edge 対応 */
    scrollbar-width: none; /* Firefox 対応 */
  }
  > #page:-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
  > .upperLeft {
    position: fixed;
    top: 0;
    left: 0;
  }
  > .slug {
    position: fixed;
    top: 6rem;
    left: 15.7rem;
    height: 3.5rem;
  }
  /* > .lowerLeft {
    position: fixed;
    bottom: 0;
    left: 0;
  } */
  > .navigation {
    position: fixed;
    top: 0;
    right: 0;
  }
  > .humberger {
    position: fixed;
    top: 0;
    right: 0;
  }
  > .faderTop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    pointer-events: none;
    .fade {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 31rem;
      background: linear-gradient(
        180deg,
        rgba(23, 23, 25, 0.5),
        rgba(0, 0, 0, 0)
      );
      ${styles.media.sp} {
        height: 19rem;
      }
    }
  }
  > .faderBottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    pointer-events: none;
    .fade {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 31rem;
      background: linear-gradient(
        0deg,
        rgba(23, 23, 25, 0.5),
        rgba(0, 0, 0, 0)
      );
      ${styles.media.sp} {
        height: 19rem;
      }
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  useWindowSize()
  const sp = useSelector((state: StateTypes) => state.media.sp)
  return <StyledComponent className="default" sp={sp} {...props} />
}

export default Container
