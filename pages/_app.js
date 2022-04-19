import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import styledNormalize from 'styled-normalize'

import { useStore } from '../src/stores/RootStore'
import Layout from '../src/layout/Layout'
import theme from '../src/themes/theme'
import { Provider } from 'mobx-react'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`
/**
 * mobx provider 상위 컴포넌트로
 */

const MyApp = (props) => {

  const { Component, pageProps } = props
  const store = useStore();
  const title = 'Hello next.js Real World!'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp;