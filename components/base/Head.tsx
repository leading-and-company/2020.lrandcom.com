import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { config } from '~/utils/config'

type ComponentProps = {
  description?: string
  image: string
  title: string
  type: string
}

const Component: React.FC<ComponentProps> = (props) => (
  <Head>
    <title>{props.title}</title>
    <link href="/images/base/favicon.png" rel="icon" type="image/x-icon" />
    <link href="/images/base/apple-touch-icon.png" rel="apple-touch-icon" />
    <meta content="リーディング＆カンパニー株式会社,夏目力" name="keywords" />
    <meta content="1475229082562793" property="fb:app_id" />
    <meta
      content={`${config.url.production}${useRouter().asPath}`}
      property="og:url"
    />
    <meta content={props.type} property="og:type" />
    <meta content="リーディング＆カンパニー株式会社" property="og:site_name" />
    <meta content={props.title} property="og:title" />
    <meta content={props.description} property="og:description" />
    <meta content={props.image} property="og:image" />
    <meta content="summary_large_image" property="twitter:card" />
    <meta content="@4chikara" property="twitter:site" />
    <meta content="@soichiro_nitta" property="twitter:creator" />
    <meta content={props.title} property="twitter:title" />
    <meta content={props.description} property="twitter:description" />
    <meta content={props.image} property="twitter:image" />
  </Head>
)

export default Component
