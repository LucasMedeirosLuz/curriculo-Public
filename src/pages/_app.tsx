
import { Layout } from '@/components/commons/Layout'
import '@/styles/globals.css'
import '@/styles/loginPage.css'
import '@/styles/pokemon.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
