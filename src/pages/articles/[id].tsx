/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '~/api'
import { useDispatch } from 'react-redux'
import { setSlug } from '~/store/header'
import { ArticleTypes } from '~/types'
// import { functions } from '~/utils/functions'
import { styles } from '~/utils/styles'
import { usePageScroll } from '~/hooks/usePageScroll'
import Header from '~/components/article/Header'
import Head from '~/components/base/Head'
import Link from 'next/link'
import Button from '~/components/base/Button'
import { useRouter } from 'next/router'

type ContainerProps = ArticleTypes
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => {
  const { asPath } = useRouter()

  const show = useMemo(() => {
    return asPath !== '/articles/starbucks_founders'
  }, [asPath])

  return (
    <div className={props.className}>
      <Head
        title={`${props.title} / リーディング＆カンパニー株式会社`}
        image={props.thumbnail.url}
        type="article"
      />
      <Header
        className="header"
        title={props.title}
        thumbnail={props.thumbnail.url}
        publishedAt={props.publishedAt}
      />
      {show && (
        <div className="banner">
          <div className="title">Kindleで本を出版しました！</div>
          <div className="text">
            2021年10月に「なぜ、スターバックスの創業者は、ビジネスマンではなく多読の作家だったのか？」という本を出版致しました。
          </div>
          <Link href="/articles/[id]" as="/articles/starbucks_founders">
            <a>
              <Button className="button">本の詳細はこちらから！！</Button>
            </a>
          </Link>
        </div>
      )}
      <div className="body" dangerouslySetInnerHTML={{ __html: props.body }} />
      {show && (
        <div className="banner">
          <div className="title">Kindleで本を出版しました！</div>
          <div className="text">
            2021年10月に「なぜ、スターバックスの創業者は、ビジネスマンではなく多読の作家だったのか？」という本を出版致しました。
          </div>
          <Link href="/articles/[id]" as="/articles/starbucks_founders">
            <a>
              <Button className="button">本の詳細はこちらから！！</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding-bottom: 15.5rem;
  ${styles.media.sp} {
    padding-bottom: 9.5rem;
  }
  > .header {
    width: 100%;
  }
  > .banner {
    font-size: 1.6rem;
    margin: 0 auto;
    width: 50rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 6rem 4rem;
    ${styles.media.sp} {
      width: calc(100% - 6rem);
    }
    > .title {
      font-weight: bold;
      letter-spacing: 0.2rem;
      transform: skew(-5deg);
    }
    > .text {
      margin-top: 4rem;
      opacity: 0.65;
      line-height: 2;
    }
    > a {
      display: inline-block;
      margin-top: 4rem;
    }
  }
  > .body {
    margin: 6rem auto;
    width: 50rem;
    overflow: hidden;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    ${styles.media.sp} {
      width: calc(100% - 6rem);
    }
    p {
      ${styles.mixins.lhCrop(2)}
      overflow: hidden;
    }
    span {
      opacity: 0.65;
    }
    img {
      margin: 0.75rem 0;
      width: 100%;
      opacity: 0.9;
    }
    a {
      text-decoration: underline;
    }
    blockquote {
      ${styles.mixins.lhCrop(2)}
      display: block;
      margin: 0;
      padding: 3rem;
      font-size: 1.4rem;
      background: #1c1c1e;
      border: 1px solid #222224;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug(`/${props.id.toUpperCase()}`))
  usePageScroll()
  return <StyledComponent className="article" {...props} />
}

export default Container

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id
  const { title, thumbnail, publishedAt, body } = await api.getArticle({
    id: (id as string) || ''
  })
  return {
    props: {
      id: id || '',
      title,
      thumbnail,
      publishedAt,
      body
    },
    unstable_revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await api.getArticles()
  const paths = articles.map(article => {
    return `/articles/${article.id}`
  })
  return { paths, fallback: false }
}
