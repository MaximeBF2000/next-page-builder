import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContentEditionContextProvider } from '@contexts/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContentEditionContextProvider>
      <Component {...pageProps} />
    </ContentEditionContextProvider>
  )
}

export default MyApp
