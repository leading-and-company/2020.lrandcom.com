import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { config } from '~/utils/config'

type ComponentProps = {
  title: string
  image: string
  type: string
  description?: string
}

const Component: React.FC<ComponentProps> = props => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" type="image/x-icon" href="/images/base/favicon.png" />
    <link rel="apple-touch-icon" href="/images/base/apple-touch-icon.png" />
    <meta name="keywords" content="リーディング＆カンパニー株式会社,夏目力" />
    <meta property="fb:app_id" content="1475229082562793" />
    <meta
      property="og:url"
      content={`${config.url.production}${useRouter().asPath}`}
    />
    <meta property="og:type" content={props.type} />
    <meta property="og:site_name" content="リーディング＆カンパニー株式会社" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@4chikara" />
    <meta property="twitter:creator" content="@soichiro_nitta" />
    <meta property="twitter:title" content={props.title} />
    <meta property="twitter:description" content={props.description} />
    <meta property="twitter:image" content={props.image} />
  </Head>
)

export default Component
