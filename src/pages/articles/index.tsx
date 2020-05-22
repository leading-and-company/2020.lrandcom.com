/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setSlug } from '~/store/header'
import { ArticleTypes } from '~/types'
import { api } from '~/api'
import Article from '~/components/articles/Article'
import { GetStaticProps } from 'next'
import { usePageScroll } from '~/hooks/usePageScroll'
import { styles } from '~/utils/styles'
import { StateTypes } from '~/store'
import Head from '~/components/base/Head'
import { config } from '~/utils/config'

type ContainerProps = {
  articles: ArticleTypes[]
}
type Props = {
  className: string
  sp: boolean
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Head
      title="記事を読む / リーディング＆カンパニー株式会社"
      image={`${config.url.production}/images/base/ogp.png`}
      type="website"
    />
    {props.articles.map(article => (
      <React.Fragment key={article.id}>
        {props.sp && <div className="divider" />}
        <Article className="article" article={article} />
      </React.Fragment>
    ))}
    {props.sp && (
      <>
        <div className="divider" />
        <div className="divider" />
      </>
    )}
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16rem auto;
  width: calc(100% - 15.7rem * 2);
  ${styles.media.sp} {
    display: block;
    margin: 9.5rem auto 0;
    width: calc(100% - 6rem);
  }
  .divider {
    ${styles.media.sp} {
      margin-top: 3rem;
      margin-left: -3rem;
      width: calc(100% + 6rem);
      height: 1px;
      background: white;
      opacity: 0.05;
    }
  }
  > .article:not(:nth-child(1)):not(:nth-child(2)) {
    margin-top: 10rem;
    ${styles.media.sp} {
      margin-top: 3rem;
    }
  }
  ${styles.media.sp} {
    > .article:nth-child(2) {
      margin-top: 3rem;
    }
  }
  > .article {
    width: 45%;
    ${styles.media.sp} {
      width: 100%;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('/ARTICLES'))
  usePageScroll()
  const sp = useSelector((state: StateTypes) => state.media.sp)
  return <StyledComponent className="articles" sp={sp} {...props} />
}

export default Container

export const getStaticProps: GetStaticProps = async () => {
  const articles = await api.getArticles()
  return {
    props: {
      articles
    },
    unstable_revalidate: 10
  }
}
