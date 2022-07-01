import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import Line from '~/components/index/Line'
import Copy from '~/components/index/Copy'
import SectionPc from '~/components/index/SectionPc'
import SectionSp from '~/components/index/SectionSp'
import OurClient from '~/components/index/OurClient'
import Contact from '~/components/index/Contact'
import { config } from '~/utils/config'
import { usePageScroll } from '~/hooks/usePageScroll'
import { StateTypes } from '~/store'
import { styles } from '~/utils/styles'
import Head from '~/components/base/Head'

type ContainerProps = {}
type ComponentProps = {
  className: string
  sp: boolean
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Head
      title="リーディング＆カンパニー株式会社"
      image={`${config.url.production}/images/base/ogp.png`}
      type="website"
    />
    {!props.sp && <Line className="line" />}
    <div className="contents">
      <Copy className="copy" />
      {(props.sp && (
        <>
          <div className="divider" />
          <SectionSp
            className="section"
            title={config.index.writing.title}
            description={config.index.writing.description}
            button={config.index.writing.button}
            link={{
              href: '/articles/[id]',
              as: '/articles/create_contents'
            }}
            src={`${config.index.writing.src}/mobile.mp4`}
          />
          <div className="divider" />
          <div className="divider" />
          <SectionSp
            className="section"
            title={config.index.website.title}
            description={config.index.website.description}
            src={`${config.index.website.src}/mobile.mp4`}
          />
          <div className="divider" />
          <div className="divider" />
          <SectionSp
            className="section"
            title={config.index.film.title}
            description={config.index.film.description}
            src={`${config.index.film.src}/mobile.mp4`}
          />
          <div className="divider" />
          <div className="divider" />
        </>
      )) || (
        <>
          <SectionPc
            className="section"
            title={config.index.writing.title}
            description={config.index.writing.description}
            button={config.index.writing.button}
            src={`${config.index.writing.src}/pc.mp4`}
            link={{
              href: '/articles/[id]',
              as: '/articles/create_contents'
            }}
          />
          <SectionPc
            className="section"
            title={config.index.website.title}
            description={config.index.website.description}
            src={`${config.index.website.src}/pc.mp4`}
          />
          <SectionPc
            className="section"
            title={config.index.film.title}
            description={config.index.film.description}
            src={`${config.index.film.src}/pc.mp4`}
          />
        </>
      )}
      <OurClient className="section" />
      {props.sp && (
        <>
          <div className="divider" />
          <div className="divider" />
        </>
      )}
      <Contact className="section" />
      {props.sp && (
        <>
          <div className="divider" />
          <div className="divider" />
        </>
      )}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  height: 100%;
  ${styles.media.sp} {
    height: auto;
  }
  > .line {
    ${styles.mixins.fixedCenter}
    margin: auto;
    width: 100%;
    height: 1px;
  }
  > .contents {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    ${styles.media.sp} {
      display: block;
      width: 100%;
      height: auto;
    }
    .divider {
      margin-top: 3rem;
      width: 100%;
      height: 1px;
      background: white;
      opacity: 0.05;
    }
    .copy {
      flex: 0 0 100vw;
      width: 100vw;
      height: 100%;
      ${styles.media.sp} {
        margin-top: 9.5rem;
      }
    }
    .section {
      flex: 0 0 100vw;
      width: 100vw;
      height: 100%;
      ${styles.media.sp} {
        margin: 3rem auto 0;
        width: calc(100% - 6rem);
      }
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('LEADING & COMPANY'))
  dispatch(setUpperLeft({ type: 'logo', to: '/', text: '' }))
  usePageScroll()

  const sp = useSelector((state: StateTypes) => state.media.sp)

  useEffect(() => {
    const page = document.getElementById('page')
    if (page) {
      const onwheel = (e: WheelEvent) => {
        page.scrollLeft += e.deltaY
      }
      if (sp) {
        window.removeEventListener('wheel', onwheel)
      } else {
        window.addEventListener('wheel', onwheel)
        return (): void => {
          window.removeEventListener('wheel', onwheel)
        }
      }
    }
  }, [sp])

  const _props = {
    className: 'index',
    sp,
    ...props
  }
  return <StyledComponent {..._props} />
}

export default Container
