import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { store } from 'redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps: {
  session, ...pageProps
} }: AppProps) {
  return <>
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  </>
}

export default MyApp
