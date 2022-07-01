import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { ArticleTypes } from '~/types'
import { functions } from '~/utils/functions'
import { styles } from '~/utils/styles'
import { useObserve } from '~/hooks/useObserve'
import { animations } from '~/utils/animations'
import { useEffectAsync } from '~/hooks/useEffectAsync'
import Link from 'next/link'

type ContainerProps = {
  className: string
  article: ArticleTypes
}
type ComponentProps = {
  refs: {
    root: React.MutableRefObject<HTMLDivElement | null>
  }
  display: boolean
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} ref={props.refs.root}>
    {props.display && (
      <Link href="/articles/[id]" as={`/articles/${props.article.id}`}>
        <a>
          <div className="thumbnail">
            <img src={props.article.thumbnail.url} alt="" />
          </div>
          <div className="title">{props.article.title}</div>
          <div className="publishedAt">
            {functions.date(props.article.publishedAt)}
          </div>
        </a>
      </Link>
    )}
  </div>
)

const StyledComponent = styled(Component)`
  min-height: 30rem;
  opacity: 0;
  transform: translateY(15rem);
  > a {
    display: block;
    .thumbnail {
      width: 100%;
      height: 24rem;
      overflow: hidden;
      opacity: 0.8;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
      }
    }
    .title {
      ${styles.mixins.lhCrop(1.8)}
      margin-top: 3rem;
      padding: 0 7rem;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
      ${styles.media.sp} {
        font-size: 1.4rem;
      }
    }
    .publishedAt {
      margin-top: 2rem;
      text-align: center;
      font-size: 1.1rem;
      line-height: 1;
      letter-spacing: 0.2rem;
      opacity: 0.4;
      ${styles.media.sp} {
        font-size: 1.2rem;
      }
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const [display, setDisplay] = useState(false)

  const refs = {
    root: useRef<HTMLDivElement>(null)
  }

  useObserve({
    ref: refs.root,
    observeIn: () => {
      if (!display) setDisplay(true)
    },
    deps: [refs.root, display]
  })

  useEffectAsync({
    effect: () => {
      if (display && refs.root.current) {
        animations.opacity(refs.root.current, 1, 1, 'InOut')
        animations.y(refs.root.current, 0, 2, 'Out')
      }
    },
    deps: [display, refs.root]
  })

  return <StyledComponent refs={refs} display={display} {...props} />
}

export default Container
