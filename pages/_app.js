import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import styledNormalize from 'styled-normalize'
import GlobalStyles from '../src/styles/globals'
import { useStore } from '../src/stores/RootStore'
import theme from '../src/themes/theme'
import { Provider } from 'mobx-react'
import { receiveResponse } from '../src/utils/api'

import App from 'next/app'

/**
 * mobx provider 상위 컴포넌트로
 */

const MyApp = (props) => {

  const { Component, pageProps } = props;

  console.log(pageProps);

  const store = useStore(pageProps.initialData);
  const title = 'Hello next.js Real World!'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp;