/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GA_TRACKING_ID } from '~/lib/gtag'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'

class _Document extends Document<{}> {
  static async getInitialProps(ctx: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()
    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()
    // Step 4: Pass styleTags as a prop
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...page, styleTags }
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

export default _Document
