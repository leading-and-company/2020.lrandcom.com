import React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import Layout from '~/layouts/default'
import Router from 'next/router'
import { gtag } from '~/lib/gtag'
import { GlobalStyle } from '~/utils/styles'

const _App: React.FC<AppProps> = props => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Layout {...props} />
    </Provider>
  </>
)

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default _App
