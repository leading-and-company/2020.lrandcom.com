/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '~/lib/gtag'
import { ServerStyleSheet } from 'styled-components'

type Props = {
  styleTags: any
}

class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"
          />
          <link rel="stylesheet" href="https://use.typekit.net/ubu5lwf.css" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          {this.props.styleTags}
        </Head>
        <body>
          <script> </script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
