import '~/utils/styles/global.css'

import { AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'
import { Provider } from 'react-redux'

import Layout from '~/layouts/default'
import { gtag } from '~/lib/gtag'
import store from '~/store'

const _App: React.FC<AppProps> = (props) => (
  <>
    <Provider store={store}>
      <Layout {...props} />
    </Provider>
  </>
)

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default _App
